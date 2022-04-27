const invalidLoginCase=[
        
                    {
                     testName:'Verify invalid login with a blank password',
                     errorMsg:'Epic sadface: Password is required',
                     username:"standard_user"
                    },
                    {
                        testName:'Verify invalid login with blank username',
                        errorMsg:'Epic sadface: Username is required',
                        password:"5555"

                    },
                    {
                        testName:'Verify invalid login with invalid credential',
                        errorMsg:'Epic sadface: Username and password do not match any user in this service',
                        username:'standard_user1',
                        password:'5555'
                    }
                  ]

const validLoginCase={
  username:'standard_user',
  password:'secret_sauce'
}

export {validLoginCase,invalidLoginCase}