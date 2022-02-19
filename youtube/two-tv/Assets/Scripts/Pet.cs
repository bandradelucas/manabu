using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Animator))]
public class Pet : MonoBehaviour
{
  public GameObject player;
  public Animator petAnimator;

  public float speed = 1;
  public float keepDistance = 0.3f;

  bool isWalking;
  float inputX;
  float inputY;
  float lastDirectionX;
  float lastDirectionY;

  Vector2 petPosition;
  Vector2 playerPosition;

  private void Start()
  {
    petAnimator = GetComponent<Animator>();
    player = GameObject.FindGameObjectWithTag("Player");

    petPosition = transform.position;
    playerPosition = SetDirection(1, 1, player.transform.position);
    
    transform.position = Vector2.MoveTowards(petPosition, playerPosition, speed * Time.deltaTime);
  }

  private void Update()
  {
    inputX = Input.GetAxisRaw("Horizontal");
    inputY = Input.GetAxisRaw("Vertical");

    isWalking = (inputX != 0 || inputY != 0);

    if (isWalking) {
      petAnimator.SetFloat("inputX", inputX);
      petAnimator.SetFloat("inputY", inputY);
    }

    petAnimator.SetBool("isWalking", isWalking);

    if (inputX > 0 || inputX < 0) {
      lastDirectionX = inputX;
    }

    if (inputY > 0 || inputY < 0) {
      lastDirectionX = inputY;
    }

    petPosition = transform.position;
    playerPosition = SetDirection(lastDirectionX, lastDirectionY, player.transform.position);

    transform.position = Vector2.MoveTowards(petPosition, playerPosition, speed * Time.deltaTime);
  }

  Vector2 SetDirection(float inputX, float inputY, Vector2 playerPosition)
  {
    if (inputX < 0) {
        playerPosition.x += keepDistance;
    } else if (inputX > 0) {
        playerPosition.x -= keepDistance;
    }

    if (inputY < 0) {
        playerPosition.y += keepDistance;
    } else if (inputY > 0) {
        playerPosition.y -= keepDistance;
    }

    return playerPosition;
  }
}
