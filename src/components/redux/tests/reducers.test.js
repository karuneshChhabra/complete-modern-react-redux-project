import {expect} from 'chai';
import {ADD_TODO, REMOVE_TODO, COMPLETE_TODO} from '../constant';


import {todoReducers} from "../reducers";

describe('Test reducers',()=>{

    it('test a todoReducers for ADD_TODO',()=>{
        const fakeTodo = 'Testing';

        const fakeAction= {
            type:ADD_TODO,
            payload:fakeTodo
        }
        const originalState = [];

        const actualValue = todoReducers(originalState,fakeAction);
        const expectedValue = [ { completed: false, title: 'Testing' } ];
        expect(actualValue).to.deep.equal(expectedValue);
    });

    
    it('test a todoReducers for COMPLETE_TODO',()=>{
        const fakeTodo = 'Testing1';

        const fakeAction= {
            type:COMPLETE_TODO,
            payload:fakeTodo
        }
        const originalState = [{ completed: false, title: 'Testing' },{ completed: false, title: 'Testing1' },{ completed: false, title: 'Redux is Awesome!' }];

        const actualValue = todoReducers(originalState,fakeAction);
        const expectedValue = [ { completed: false, title: 'Testing' },{ completed: true, title: 'Testing1' },{ completed: false, title: 'Redux is Awesome!' } ];
        expect(actualValue).to.deep.equal(expectedValue);
    })
   
    it('test a todoReducers for DELETE_TODO',()=>{
        const fakeTodo = 'Testing1';

        const fakeAction= {
            type:REMOVE_TODO,
            payload:fakeTodo
        }
        const originalState = [{ completed: false, title: 'Testing' },{ completed: false, title: 'Testing1' },{ completed: false, title: 'Redux is Awesome!' }];

        const actualValue = todoReducers(originalState,fakeAction);
        const expectedValue = [ { completed: false, title: 'Testing' },{ completed: false, title: 'Redux is Awesome!' } ];
        expect(actualValue).to.deep.equal(expectedValue);
    })

})