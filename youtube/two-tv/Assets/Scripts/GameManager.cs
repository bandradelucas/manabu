using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
  public Int32 CalculateHealth(Player player)
  {
    // Formula: (resistance * 10) + (level * 4) + 10
    Int32 result = (player.entity.resistance * 10) + (player.entity.level * 4) + 10;
    Debug.LogFormat("CalculateHealth: {0}", result);

    return result;
  }

  public Int32 CalculateMana(Player player)
  {
    Int32 result = (player.entity.intelligence * 10) + (player.entity.level * 4) + 5;
    Debug.LogFormat("CalculateMana: {0}", result);

    return result;
  }

  public Int32 CalculateStamina(Player player)
  {
    Int32 result = (player.entity.intelligence + player.entity.willpower) + (player.entity.level * 2) + 5;
    Debug.LogFormat("CalculateStamina: {0}", result);

    return result;
  }
  public Int32 CalculateDamage(Player player, int weaponDamage)
  {
    System.Random random = new System.Random();
    Int32 result = (player.entity.strength * 2) + (weaponDamage * 2) + (player.entity.level * 3) + random.Next(1, 20);
    Debug.LogFormat("CalculateDamage: {0}", result);

    return result;
  }
  
  public Int32 CalculateDefense(Player player, int armorDefense)
  {
    Int32 result = (player.entity.resistance * 2) + armorDefense + (player.entity.level * 3);
    Debug.LogFormat("CalculateDefense: {0}", result);

    return result;
  }
  
}
