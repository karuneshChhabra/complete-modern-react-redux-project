// import fetchMock from 'fetch-mock';
// import {expect} from 'chai';
// import sinon from 'sinon';
// import axios from  'axios';
// import {loadData} from '../thunk';
// jest.mock('axios');

// import {
//     LOADING_IN_PROGRESS,
//     LOADING_SUCCESS,
//     LOADING_FAILED,
//     ADD_TODO,
//   } from "./constant";

// describe('test thunks' ,() =>{
//     const data = [];
//     beforeEach(() => {
//         axios.get.mockResolvedValue(data);
//     });

//     it('load todos from server using thunk', async ()=>{
//         const fakeDispatch = sinon.spy();
//         const fakeTodos= [{ completed: false, title: 'Testing' }];
//         const firstAction = {type:LOADING_IN_PROGRESS};
//         const secondAction = {type:LOADING_SUCCESS, payload:{fakeTodos}};
//         // fetchMock.get('https://jsonplaceholder.typicode.com/todos',fakeTodos);
//         axios.get.mockImplementationOnce(() => Promise.resolve(fakeTodos));

//         await loadData()(fakeDispatch);
//         expect(fetchMock.getCall(0).args[0]).to.deep.equal(firstAction);
//         expect(fetchMock.getCall(1).args[0]).to.deep.equal(secondAction);


//         fetchMock.reset();

//         //const aStub = sinon.stub(axios, "get").resolves(fakeTodos);




//     })
// })