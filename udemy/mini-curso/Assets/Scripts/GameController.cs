using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public Transform playerTransform;
    private Camera cam;

    public float camSpeed;
    public Transform camLimitTop, camLimitRight, camLimitBottom, camLimitLeft; 

    void Start()
    {
        cam = Camera.main;
    }

    void Update()
    {
        
    }

    void LateUpdate()
    {
        float camPosX = playerTransform.position.x;
        float camPosY = playerTransform.position.y;

        if (cam.transform.position.x < camLimitLeft.position.x && playerTransform.position.x < camLimitLeft.position.x) {
            camPosX = camLimitLeft.position.x;
        } else if (cam.transform.position.x > camLimitRight.position.x && playerTransform.position.x > camLimitRight.position.x) {
            camPosX = camLimitRight.position.x;
        }

        if (cam.transform.position.y < camLimitBottom.position.y && playerTransform.position.y < camLimitBottom.position.y) {
            camPosY = camLimitBottom.position.y;
        } else if (cam.transform.position.y > camLimitTop.position.y && playerTransform.position.y > camLimitTop.position.y) {
            camPosY = camLimitTop.position.y;
        } 

        Vector3 cameraPosition = new Vector3(camPosX, camPosY, cam.transform.position.z);

        cam.transform.position = Vector3.Lerp(cam.transform.position, cameraPosition, camSpeed * Time.deltaTime);
    }
}
