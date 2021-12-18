using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
  public Entity entity;

  [Header("Game Manager")]
  public GameManager manager;

  [Header("Player UI")]

  public Slider health;
  public Slider mana;
  public Slider stamina;
  public Slider experience;

  // Start is called before the first frame update
  void Start()
  {
    if (manager == null)
    {
      Debug.LogError("Você precisa anexar o game manager aqui no player");
      return;
    }

    entity.maxHealth = manager.CalculateHealth(this);

    entity.currentHealth = entity.maxHealth;
    entity.currentMana = entity.maxMana;
    entity.currentStamina = entity.maxStamina;

    health.maxValue = entity.maxHealth;
    health.value = health.maxValue;

    mana.maxValue = entity.maxMana;
    mana.value = mana.maxValue;

    stamina.maxValue = entity.maxStamina;
    stamina.value = stamina.maxValue;

    experience.value = 0;
  }

  private void Update()
  {
    health.value = entity.currentHealth;
    mana.value = entity.currentMana;
    stamina.value = entity.currentStamina;

    if (Input.GetKeyDown(KeyCode.Space))
    {
      entity.currentHealth -= 1;
    }
  }
}
