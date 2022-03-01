using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody2D playerRb;
    private Animator playerAnimator;

    public float speed;

    public float jumpForce;

    public bool isLookLeft;

    public Transform groundCheck;
    private bool isGrounded;
    private bool isAttack;

    public Transform hand;
    public GameObject hitBoxPrefab;

    // Start is called before the first frame update
    void Start()
    {
        playerRb = GetComponent<Rigidbody2D>();
        playerAnimator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        float h = Input.GetAxisRaw("Horizontal");

        if (isAttack == true && isGrounded == true) {
            h = 0;
        }

        if (h > 0 && isLookLeft == true) {
            Flip();
        } else if (h < 0 && isLookLeft == false) {
            Flip();
        }

        float speedY = playerRb.velocity.y;

        if (Input.GetButtonDown("Jump") && isGrounded == true) {
            playerRb.AddForce(new Vector2(0, jumpForce));
        }

        if (Input.GetButtonDown("Fire1") && isAttack == false) {
            isAttack = true;
            playerAnimator.SetTrigger("attack");
        }

        playerRb.velocity = new Vector2(h * speed, speedY);

        playerAnimator.SetInteger("h", (int) h);
        playerAnimator.SetBool("isGrounded", isGrounded);
        playerAnimator.SetFloat("speedY", speedY);
        playerAnimator.SetBool("isAttack", isAttack);
    }

    void FixedUpdate() {
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, 0.02f);
    }

    void Flip()
    {
        isLookLeft = !isLookLeft;
        float x = transform.localScale.x * -1;
        transform.localScale = new Vector3(x, transform.localScale.y, transform.localScale.z);
    }

    void OnEndAttack()
    {
        isAttack = false;
    }
    
    void HitBoxAttack()
    {
        GameObject hitBoxTemp = Instantiate(hitBoxPrefab, hand.position, transform.localRotation);
        Destroy(hitBoxTemp, 0.2f);
    }
}
