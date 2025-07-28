using UnityEngine;

public abstract class EntityState
{
    protected Player player;
    protected StateMachine stateMachine;
    protected string animatorBoolName;

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
        player.animator.SetFloat("yVelocity", player.rigidbody2d.linearVelocity.y);
    }

    public virtual void Exit()
    {
        player.animator.SetBool(animatorBoolName, false);
    }
}
