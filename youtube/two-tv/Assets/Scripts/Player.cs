using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
  public Entity entity;

  [Header("Player Regeneration System")]
  public bool HPRegenerationEnabled = true;
  public float HPRegenerationTime = 5f;
  public int HPRegenerationValue = 5;
  public bool MPRegenerationEnabled = true;
  public float MPRegenerationTime = 10f;
  public int MPRegenerationValue = 5;

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

    entity.maxHealth = manager.CalculateHealth(entity);
    entity.maxMana = manager.CalculateMana(entity);
    entity.maxStamina = manager.CalculateStamina(entity);

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

    StartCoroutine(HPRegeneration());
    StartCoroutine(MPRegeneration());
  }

  private void Update()
  {
    health.value = entity.currentHealth;
    mana.value = entity.currentMana;
    stamina.value = entity.currentStamina;
  }

  IEnumerator HPRegeneration()
  {
    while(true)
    {
      if (HPRegenerationEnabled)
      {
        if (entity.currentHealth < entity.maxHealth)
        {
          Debug.LogFormat("Recuperando HP");
          entity.currentHealth += HPRegenerationValue;
          yield return new WaitForSeconds(HPRegenerationTime);
        } else {
          yield return null;
        }
      } else {
        yield return null;
      }
    }
  }
  IEnumerator MPRegeneration()
  {
    while(true)
    {
      if (MPRegenerationEnabled)
      {
        if (entity.currentMana < entity.maxMana)
        {
          Debug.LogFormat("Recuperando MP");
          entity.currentMana += MPRegenerationValue;
          yield return new WaitForSeconds(MPRegenerationTime);
        } else {
          yield return null;
        }
      } else {
        yield return null;
      }
    }
  }
}
