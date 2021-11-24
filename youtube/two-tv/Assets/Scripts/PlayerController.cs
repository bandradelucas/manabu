using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public Animator playerAnimator;

    float inputX;
    float inputY;
    public float speed = 2.5f;
    bool isWalking = false;

    // Start is called before the first frame update
    void Start()
    {
        isWalking = false;
    }

    // Update is called once per frame
    void Update()
    {
        inputX = Input.GetAxisRaw("Horizontal");
        inputY = Input.GetAxisRaw("Vertical");

        isWalking = (inputX != 0 || inputY != 0);

        if (isWalking) {
            var move = new Vector3(inputX, inputY, 0).normalized;
            transform.position += move * speed * Time.deltaTime;

            playerAnimator.SetFloat("inputX", inputX);
            playerAnimator.SetFloat("inputY", inputY);
        }

        playerAnimator.SetBool("isWalking", isWalking);

        if (Input.GetButtonDown("Fire1")) {
            playerAnimator.SetTrigger("attack");
        }
    }
}
