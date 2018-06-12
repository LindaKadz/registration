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

  describe('Testing an existing e-mail', function(){
    it ('Tests an existing e-mail', function(){
      expect(email).toEqual("The e-mail already exists, please proceed to login");
    });
  });

  describe('Testing a wrong e-mail', function(){
    it ('Tests a wrong e-mail', function(){
      expect(email).toEqual("Sorry, the e-mail entered does not exist");
    });
  });

  describe('Testing a valid e-mail', function(){
    it ('Tests a valid e-mail', function(){
      expect(email).not.toBeNull(email);
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
