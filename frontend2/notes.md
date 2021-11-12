###ERD: 
userNumber? 
userID, birthday, sex(binary), phone, email, password, address, vaccinated(binary), vaccine_type

###sub - User_Vaccine) 
vaccine_type(fk)
innoculation_date(pk)
side_effects(binary)
undercond_id

###thought flow:
1. login - main user page/module
2. join
3. info
4. unregister

###Login + UserPage from 
https://github.com/minimal-ui-kit/material-kit-react
다시 고치기;; 

###프런트씨 주의! 
package.json dependencies + devdependencies 둘다 봐주세요 추가 많아요!