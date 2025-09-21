using UnityEngine;

public class Player : MonoBehaviour
{
    public Animator animator { get; private set; }
    public Rigidbody2D rigidbody2d { get; private set; }
    public PlayerInputSet input { get; private set; }
    private StateMachine stateMachine;

    public PlayerIdleState idleState { get; private set; }
    public PlayerMoveState moveState { get; private set; }
    public PlayerJumpState jumpState { get; private set; }
    public PlayerFallState fallState { get; private set; }
    public PlayerWallSlideState wallSlideState { get; private set; }
    public PlayerWallJumpState wallJumpState { get; private set; }
    public PlayerDashState dashState { get; private set; }
    public PlayerBasicAttackState basicAttackState { get; private set; }
    [Header("Attack")]
    public Vector2 attackVelocity;
    public float attackVelocityDuration = .1f;

    [Header("Movement")]
    public float moveSpeed = 8f;
    public float jumpForce = 12f;
    public Vector2 wallJumpForce;
    [Range(0, 1)] public float inAirMoveMultiplier = 0.7f;
    [Range(0, 1)] public float wallSlideSlowMultiplier = 0.7f;
    [Space] public float dashDuration = .25f;
    public float dashSpeed = 20;
    private bool isFacingRight = true;
    public int facingDirection { get; private set; } = 1;
    public Vector2 moveInput { get; private set; }

    [Header("Collision Detection")]
    [SerializeField] private float groundCheckDistance;
    [SerializeField] private float wallCheckDistance;
    [SerializeField] private LayerMask groundLayer;
    public bool isGroundDetected { get; private set; }
    public bool isWallDetected { get; private set; }

    private void Awake()
    {
        animator = GetComponentInChildren<Animator>();
        rigidbody2d = GetComponent<Rigidbody2D>();

        input = new PlayerInputSet();
        stateMachine = new StateMachine();

        idleState = new PlayerIdleState(this, stateMachine, "idle");
        moveState = new PlayerMoveState(this, stateMachine, "move");
        jumpState = new PlayerJumpState(this, stateMachine, "jumpAndFall");
        fallState = new PlayerFallState(this, stateMachine, "jumpAndFall");
        wallSlideState = new PlayerWallSlideState(this, stateMachine, "wallSlide");
        wallJumpState = new PlayerWallJumpState(this, stateMachine, "jumpAndFall");
        dashState = new PlayerDashState(this, stateMachine, "dash");
        basicAttackState = new PlayerBasicAttackState(this, stateMachine, "basicAttack");
    }


    private void OnEnable()
    {
        input.Enable();

        input.Player.Movement.performed += context => moveInput = context.ReadValue<Vector2>();
        input.Player.Movement.canceled += context => moveInput = Vector2.zero;
    }

    private void OnDisable()
    {
        input.Disable();
    }

    private void Start()
    {
        stateMachine.Initialize(idleState);
    }

    private void Update()
    {
        HandleCollisionDetection();
        stateMachine.UpdateActivateState();
    }

    public void CallAnimationTrigger()
    {
        stateMachine.currentState.CallAnimationTrigger();
    }

    public void SetVelocity(float x, float y)
    {
        rigidbody2d.linearVelocity = new Vector2(x, y);
        HandleFlip(x);
    }

    private void HandleFlip(float x)
    {
        if (x > 0 && !isFacingRight)
        {
            Flip();
        }
        else if (x < 0 && isFacingRight)
        {
            Flip();
        }
    }

    public void Flip()
    {
        transform.Rotate(0, 180, 0);
        isFacingRight = !isFacingRight;
        facingDirection *= -1;
    }

    private void HandleCollisionDetection()
    {
        isGroundDetected = Physics2D.Raycast(transform.position, Vector2.down, groundCheckDistance, groundLayer);
        isWallDetected = Physics2D.Raycast(transform.position, Vector2.right * facingDirection, wallCheckDistance, groundLayer);
    }

    private void OnDrawGizmos()
    {
        Gizmos.DrawLine(transform.position, transform.position + new Vector3(0, -groundCheckDistance));
        Gizmos.DrawLine(transform.position, transform.position + new Vector3(wallCheckDistance * facingDirection, 0));
    }
}
