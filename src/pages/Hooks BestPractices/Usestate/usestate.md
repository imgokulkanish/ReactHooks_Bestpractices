Best Practices of Usestate:
1. Use Functional Update Approach ((currNum)=>currNum+1)
2. Initialization (white screen)- 1.user && {}
                                  2.?
                                  3.Initialize
                                  4.Describe usestate as per type
3. Update a certain property in an object
4. How to change all inputs with a single onchange -1.have single usestate for all inputs
                                                    2.have name property for all inputs
                                                    3.[e.target.name]:e.target.value
5. If its a complex state which has 0,{},[],nested obj - can use usereducer
6. React Derived States