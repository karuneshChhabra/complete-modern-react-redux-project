import {getIncompleteTodos} from '../selector';
import {expect} from 'chai';

describe('test the selector ',()=>{

    it('test in complete todos',()=>{
        const todos =[
            { completed: false, title: 'Testing' },{ completed: true, title: 'Testing1' },{ completed: false, title: 'Redux is Awesome!' }];

        const expectedTodos =[
                { completed: false, title: 'Testing' },{ completed: false, title: 'Redux is Awesome!' }];
    
        const actualIncompleteTodos = getIncompleteTodos.resultFunc(todos);  

        expect(actualIncompleteTodos).to.deep.equal(expectedTodos)
    })
})
