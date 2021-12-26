using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
[RequireComponent(typeof(Player))]
public class PlayerController : MonoBehaviour
{
    public Player player;
    public Animator playerAnimator;

    float inputX = 0;
    float inputY = 0;
    public float speed = 2.5f;
    bool isWalking = false;
    Rigidbody2D rb2D;
    Vector2 movement = Vector2.zero;


    // Start is called before the first frame update
    void Start()
    {
        isWalking = false;
        rb2D = GetComponent<Rigidbody2D>();
        player = GetComponent<Player>();
    }

    // Update is called once per frame
    void Update()
    {
        inputX = Input.GetAxisRaw("Horizontal");
        inputY = Input.GetAxisRaw("Vertical");

        isWalking = (inputX != 0 || inputY != 0);

        movement = new Vector2(inputX, inputY);

        if (isWalking) {
            playerAnimator.SetFloat("inputX", inputX);
            playerAnimator.SetFloat("inputY", inputY);
        }

        playerAnimator.SetBool("isWalking", isWalking);

        if (Input.GetButtonDown("Fire1")) {
            playerAnimator.SetTrigger("attack");
        }
    }

    private void FixedUpdate() {
        rb2D.MovePosition(rb2D.position + movement * player.entity.speed * Time.fixedDeltaTime);
    }
}
