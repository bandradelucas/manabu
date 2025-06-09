using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
  public Int32 CalculateHealth(Entity entity)
  {
    // Formula: (resistance * 10) + (level * 4) + 10
    Int32 result = (entity.resistance * 10) + (entity.level * 4) + 10;
    Debug.LogFormat("CalculateHealth: {0}", result);

    return result;
  }

  public Int32 CalculateMana(Entity entity)
  {
    Int32 result = (entity.intelligence * 10) + (entity.level * 4) + 5;
    Debug.LogFormat("CalculateMana: {0}", result);

    return result;
  }

  public Int32 CalculateStamina(Entity entity)
  {
    Int32 result = (entity.intelligence + entity.willpower) + (entity.level * 2) + 5;
    Debug.LogFormat("CalculateStamina: {0}", result);

    return result;
  }
  public Int32 CalculateDamage(Entity entity, int weaponDamage)
  {
    System.Random random = new System.Random();
    Int32 result = (entity.strength * 2) + (weaponDamage * 2) + (entity.level * 3) + random.Next(1, 20);
    Debug.LogFormat("CalculateDamage: {0}", result);

    return result;
  }
  
  public Int32 CalculateDefense(Entity entity, int armorDefense)
  {
    Int32 result = (entity.resistance * 2) + armorDefense + (entity.level * 3);
    Debug.LogFormat("CalculateDefense: {0}", result);

    return result;
  }
  
}
