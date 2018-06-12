describe('Testing Login', function(){

var username;
var password;

describe('Testing a valid username', function(){
it ('Tests a valid username', function(){
  expect(username).toBe(user);
});
});

describe('Testing a wrong username', function(){
  it ('Tests a wrong username', function(){
    expect(username).toEqual("Sorry, this username does not exist in our database");
  });
});

describe('Testing a valid password', function(){
it ('Tests a valid password', function(){
  expect(password).toEqual(password);
});
});

describe('Testing a wrong password', function(){
  it ('Tests a wrong password', function(){
    expect(password).toBe("Wrong password");
  });
});

describe('Testing a valid username & password', function(){
it ('Tests a valid username & password', function(){
  expect(username, password).toBe("Successful Login");
});
});

describe('Testing a wrong username & password', function(){
  it ('Tests a wrong username & password', function(){
    expect(username, password).toEqual("Password & username does not match");
  });
});

});
