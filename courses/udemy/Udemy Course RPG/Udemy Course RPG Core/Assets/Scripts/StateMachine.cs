using UnityEngine;

public class StateMachine
{
    public EntityState currentState { get; private set; }

    public void Initialize(EntityState initialState)
    {
        currentState = initialState;
        currentState.Enter();
    }

    public void ChangeState(EntityState newState)
    {
        currentState.Exit();
        currentState = newState;
        currentState.Enter();
    }

    public void UpdateActivateState()
    {
        currentState.Update();
    }
}
