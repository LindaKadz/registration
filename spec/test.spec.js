describe('Testing Login', function(){

describe('Testing a valid username', function(){
it ('Tests a valid username', function(){
  expect(username).toBe(username);
});
});

describe('Testing a wrong username', function(){
  it ('Tests a wrong username', function(){
    expect(username).not.toBe(username);
  });
});

describe('Testing a valid password', function(){
it ('Tests a valid password', function(){
  expect(password).toEqual(password);
});
});

describe('Testing a wrong password', function(){
  it ('Tests a wrong password', function(){
    expect(password).not.toBeNull(password);
  });
});

describe('Testing a valid username & password', function(){
it ('Tests a valid username & password', function(){
  expect(username, password).toBe(users);
});
});

describe('Testing a wrong username & password', function(){
  it ('Tests a wrong username & password', function(){
    expect(username, password).not.toBe(users);
  });
});

});
