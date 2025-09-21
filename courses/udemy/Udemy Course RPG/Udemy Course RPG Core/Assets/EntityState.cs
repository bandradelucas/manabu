using UnityEngine;
using UnityEngine.Rendering.UI;

public abstract class EntityState
{
    protected Player player;
    protected StateMachine stateMachine;
    protected string animatorBoolName;

    protected float stateTimer;

    public EntityState(Player player, StateMachine stateMachine, string animatorBoolName)
    {
        this.player = player;
        this.stateMachine = stateMachine;
        this.animatorBoolName = animatorBoolName;
    }

    public virtual void Enter()
    {
        player.animator.SetBool(animatorBoolName, true);
    }

    public virtual void Update()
    {
        stateTimer -= Time.deltaTime;
        player.animator.SetFloat("yVelocity", player.rigidbody2d.linearVelocity.y);

        if (player.input.Player.Dash.WasPressedThisFrame() && CanDash())
        {
            stateMachine.ChangeState(player.dashState);
        }
    }

    public virtual void Exit()
    {
        player.animator.SetBool(animatorBoolName, false);
    }

    private bool CanDash()
    {
        if (player.isWallDetected)
        {
            return false;
        }

        if (stateMachine.currentState == player.dashState)
        {
            return false;
        }

        return true;
    }
}
