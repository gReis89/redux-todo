import todos from './todoReducer.js';
import {expect} from 'chai';

describe('Reducers::Todo', () => {

  it('should add TODO', function(){
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 0,
        text: 'Learn Redux'
      }
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    expect(
      todos(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should toggle TODO', function(){
    const stateBefore = [
      {
        id: 0,
        text: 'Study',
        completed: false
      },
      {
        id: 1,
        text: 'Fed the fod',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      todo: {
        id: 0
      }
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Study',
        completed: true
      },
      {
        id: 1,
        text: 'Fed the fod',
        completed: false
      }
    ];

    expect(
      todos(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });


});
