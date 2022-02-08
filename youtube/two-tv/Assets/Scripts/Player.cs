using System;
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

  [Header("Player Shortcuts")]
  public KeyCode attributesKey = KeyCode.C;

  [Header("Player UI Panels")]
  public GameObject attributesPanel;

  [Header("Player UI")]

  public Slider health;
  public Slider mana;
  public Slider stamina;
  public Slider experience;
  public Text experienceText;
  public Text levelText;
  public Text strengthText;
  public Text resistanceText;
  public Text intelligenceText;
  public Text willpowerText;
  public Button strengthIncreaseButton;
  public Button resistanceIncreaseButton;
  public Button intelligenceIncreaseButton;
  public Button willpowerIncreaseButton;
  public Button strengthDecreaseButton;
  public Button resistanceDecreaseButton;
  public Button intelligenceDecreaseButton;
  public Button willpowerDecreaseButton;
  public Text pointsText;

  [Header("Experience")]
  public int experienceCurrent;
  public int experienceBase;
  public int experienceLeft;
  public float experienceMod;
  public GameObject levelUpFX;
  public AudioClip levelUpSound;
  public int givePoints = 5;

  [Header("Respawn")]
  public float respawnTime = 5;
  public GameObject prefab;
  

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

    experience.value = experienceCurrent;
    experience.maxValue = experienceLeft;

    experienceText.text = string.Format("Exp: {0}/{1}", experienceCurrent, experienceLeft);
    levelText.text = entity.level.ToString();

    StartCoroutine(HPRegeneration());
    StartCoroutine(MPRegeneration());

    UpdatePoints();
    SetupUIButtons();
  }

  private void Update()
  {
    if (entity.dead) {
      return;
    }

    if (entity.currentHealth <= 0) {
      Die();
    }

    if (Input.GetKeyDown(attributesKey)) {
      attributesPanel.SetActive(!attributesPanel.activeSelf);
    }

    health.value = entity.currentHealth;
    mana.value = entity.currentMana;
    stamina.value = entity.currentStamina;

    experience.value = experienceCurrent;
    experience.maxValue = experienceLeft;

    experienceText.text = string.Format("Exp: {0}/{1}", experienceCurrent, experienceLeft);
    levelText.text = entity.level.ToString();
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

  void Die()
  {
    entity.currentHealth = 0;
    entity.dead = true;
    entity.target = null;

    StopAllCoroutines();
    StartCoroutine(Respawn());
  }

  IEnumerator Respawn()
  {
    GetComponent<PlayerController>().enabled = false;

    yield return new WaitForSeconds(respawnTime);

    GameObject newPlayer = Instantiate(prefab, transform.position, transform.rotation, null);
    newPlayer.name = prefab.name;
    newPlayer.GetComponent<Player>().entity.dead = false;
    newPlayer.GetComponent<Player>().entity.combatCoroutine = false;
    newPlayer.GetComponent<PlayerController>().enabled = true;

    Destroy(this.gameObject);
  }

  public void GainExperience(int amount)
  {
    experienceCurrent += amount;

    if (experienceCurrent >= experienceLeft) {
      LevelUp();
    }
  }

  public void LevelUp()
  {
    experienceCurrent -= experienceLeft;
    entity.level++;
    entity.points += givePoints;

    UpdatePoints();

    entity.currentHealth = entity.maxHealth;

    float newExperience = Mathf.Pow((float) experienceMod, entity.level);
    experienceLeft = (int) Mathf.Floor((float) experienceBase * newExperience);

    entity.audio.PlayOneShot(levelUpSound);
    Instantiate(levelUpFX, this.gameObject.transform);
  }

  public void UpdatePoints()
  {
    strengthText.text = entity.strength.ToString();
    resistanceText.text = entity.resistance.ToString();
    intelligenceText.text = entity.intelligence.ToString();
    willpowerText.text = entity.willpower.ToString();
    pointsText.text = entity.points.ToString();
  }

  public void SetupUIButtons()
  {
    strengthIncreaseButton.onClick.AddListener(() => IncreasePoint(1));
    resistanceIncreaseButton.onClick.AddListener(() => IncreasePoint(2));
    intelligenceIncreaseButton.onClick.AddListener(() => IncreasePoint(3));
    willpowerIncreaseButton.onClick.AddListener(() => IncreasePoint(4));
    strengthDecreaseButton.onClick.AddListener(() => DecreasePoint(1));
    resistanceDecreaseButton.onClick.AddListener(() => DecreasePoint(2));
    intelligenceDecreaseButton.onClick.AddListener(() => DecreasePoint(3));
    willpowerDecreaseButton.onClick.AddListener(() => DecreasePoint(4));
  }

  public void IncreasePoint(int index)
  {
    if (entity.points > 0) {
      if (index == 1) {
          entity.strength++;
      } else if (index == 2) {
          entity.resistance++;
      } else if (index == 3) {
          entity.intelligence++;
      } else if (index == 4) {
          entity.willpower++;
      }

      entity.points--;
      UpdatePoints();
    }
  }
  public void DecreasePoint(int index)
  {
    if (index == 1 && entity.strength > 0) {
      entity.strength--;
    } else if (index == 2 && entity.resistance > 0) {
      entity.resistance--;
    } else if (index == 3 && entity.intelligence > 0) {
      entity.intelligence--;
    } else if (index == 4 && entity.willpower > 0) {
      entity.willpower--;
    } else {
      return;
    }

    entity.points++;
    UpdatePoints();
  }
}
