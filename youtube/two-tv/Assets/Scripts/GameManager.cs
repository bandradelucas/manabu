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
}
