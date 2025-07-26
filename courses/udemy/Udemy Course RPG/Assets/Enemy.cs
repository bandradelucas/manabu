using UnityEngine;
using UnityEngine.Rendering;

public class Enemy : MonoBehaviour
{
    private SpriteRenderer spriteRenderer;
    [SerializeField] private float redColorDuration = 1;
    public float currentTimeInGame;
    public float lastTimeWasDamaged;

    private void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    private void Update()
    {
        ChangeColorIfDamaged();
    }

    private void ChangeColorIfDamaged()
    {
        currentTimeInGame = Time.time;

        if (currentTimeInGame > lastTimeWasDamaged + redColorDuration)
        {
            if (spriteRenderer.color != Color.white)
            {
                TurnWhite();
            }
        }
    }
    public void TakeDamage()
    {
        spriteRenderer.color = Color.red;
        lastTimeWasDamaged = Time.time;
    }

    private void TurnWhite()
    {
        spriteRenderer.color = Color.white;
    }
}
