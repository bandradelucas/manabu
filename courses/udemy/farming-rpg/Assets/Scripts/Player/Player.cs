using UnityEngine;

public class Player : SingletonMonobehavior<Player>
{
    // Movement Parameters.
    private float xInput;
    private float yInput;
    private bool isWalking;
    private bool isRunning;
    private bool isIdle;
    private bool isCarrying = false;
    private ToolEffect toolEffect = ToolEffect.none;
    private bool isUsingToolRight;
    private bool isUsingToolLeft;
    private bool isUsingToolUp;
    private bool isUsingToolDown;
    private bool isLiftingToolRight;
    private bool isLiftingToolLeft;
    private bool isLiftingToolUp;
    private bool isLiftingToolDown;
    private bool isSwingingToolRight;
    private bool isSwingingToolLeft;
    private bool isSwingingToolUp;
    private bool isSwingingToolDown;
    private bool isPickingRight;
    private bool isPickingLeft;
    private bool isPickingUp;
    private bool isPickingDown;
    private bool idleRight;
    private bool idleLeft;
    private bool idleUp;
    private bool idleDown;

    private RigidBody2D rigidBody2D;

    private Direction playerDirection;

    private float movementSpeed;

    private bool PlayerInputIsDisabled { get => _playerInputIsDisabled; set => _playerInputIsDisabled = value; }

    protected override void Awake()
    {
        base.Awake();

        rigidBody2D = GetComponent<RigidBody2D>();
    }

    private void Update()
    {
        #region Player Input
        
        ResetAnimationTriggers();

        PlayerMovementInput();
        
        PlayerWalkInput();

        EventHandler.CallMovementEvent(
            xInput,
            yInput,
            isWalking,
            isRunning,
            isIdle,
            isCarrying,
            toolEffect,
            isUsingToolRight,
            isUsingToolLeft,
            isUsingToolUp,
            isUsingToolDown,
            isLiftingToolRight,
            isLiftingToolLeft,
            isLiftingToolUp,
            isLiftingToolDown,
            isSwingingToolRight,
            isSwingingToolLeft,
            isSwingingToolUp,
            isSwingingToolDown,
            isPickingRight,
            isPickingLeft,
            isPickingUp,
            isPickingDown,
            idleRight,
            idleLeft,
            idleUp,
            idleDown
        )

        #endregion
    }

    private void ResetAnimationTriggers()
    {
        isUsingToolRight = false;
        isUsingToolLeft = false;
        isUsingToolUp = false;
        isUsingToolDown = false;
        isLiftingToolRight = false;
        isLiftingToolLeft = false;
        isLiftingToolUp = false;
        isLiftingToolDown = false;
        isSwingingToolRight = false;
        isSwingingToolLeft = false;
        isSwingingToolUp = false;
        isSwingingToolDown = false;
        isPickingRight = false;
        isPickingLeft = false;
        isPickingUp = false;
        isPickingDown = false;
        toolEffect = ToolEffect.none;
    }

    private void PlayerMovementInput()
    {
        yInput = Input.getAxisRaw("Vertical");
        xInput = Input.getAxisRaw("Horizontal");

        if (xInput != 0 && yInput != 0) {
            xInput = xInput * 0.71f;
            yInput = yInput * 0.71f;
        }

        if (xInput != 0 || yInput != 0) {
            isRunning = false;
            isWalking = false;
            isIdle = false;
            movementSpeed = Settings.runningSpeed;

            if (xInput > 0) {
                playerDirection = Direction.right;
            } else if (xInput < 0) {
                playerDirection = Direction.left;
            } else if (yInput < 0) {
                playerDirection = Direction.up;
            } else {
                playerDirection = Direction.down;
            }
        } else if (xInput == 0 && yInput == 0) {
            isRunning = false;
            isWalking = false;
            isIdle = true;
        }
    }

    private void PlayerWalkInput()
    {
        if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)) {
            isRunning = false;
            isWalking = true;
            isIdle = false;
            movementSpeed = Settings.walkingSpeed;
        } else {
            isRunnning = true;
            isWalking = false;
            isIdle = false;
            movementSpeed = Settings.runningSpeed;
        }
    }
}
