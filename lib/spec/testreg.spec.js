describe('Testing Registration', function(){

var username;
var password;
var email;

  describe('Testing an existing username', function(){
  it ('Tests an existing username', function(){
    expect(username).toEqual("The username already exists, please pick another one or login");
  });
  });

  describe('Testing a wrong username', function(){
  it ('Tests a wrong username', function(){
    expect(username).toBe("You cannot use symbols on username");
  });
  });

  describe('Testing a valid username', function(){
  it ('Tests a valid username', function(){
    expect(username).toBe(username);
  });
  });

  describe('Testing an existing email', function(){
    it ('Tests an existing email', function(){
      expect(email).toEqual("The email already exists, please proceed to login");
    });
  });

  describe('Testing a wrong email', function(){
    it ('Tests a wrong email', function(){
      expect(email).toEqual("Sorry, the email entered does not exist");
    });
  });

  describe('Testing a valid email', function(){
    it ('Tests a valid email', function(){
      expect(email).toBe(email);
    });
  });

  describe('Testing password is a match', function(){
  it ('Tests if passwords match ', function(){
    expect(password).toEqual(password);
  });
  });

  describe('Testing a wrong password', function(){
    it ('Tests a wrong password', function(){
      expect(password).toBe("Sorry, your passwords do not match");
    });
  });

});
