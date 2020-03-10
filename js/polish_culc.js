
        var buttons = document.querySelectorAll('.calc__button');
        const resultButton = document.querySelector('.calc__result-button');
        const btnSqr = document.querySelector('.calc__sqr')
        const clearButton = document.querySelector('.calc__clear-button');

        function sum(resultText) {
            let resText = resultText.split('');
            console.log('Приходит в sum:', resText );

            let operation = [];
            let arr = [];
            // let total = [];
            
            
            
            for( i = 0; i < resText.length; i++) {
                let num = resText[i];
                console.log('for', num)

                if(Number(resText[i])) {
                    arr.push(resText[i]);
                     
                }

                if(!Number(num)) {
                    operation.push(num) ;
                }
                
            }
        const polishArr = [...arr, ...operation];
        const stack = [];

        for(let i = 0; i < polishArr.length; i++) {

            if(Number(polishArr[i])) {
                stack.push(polishArr[i])
            }
            else {
                let tmp1 = stack.pop();
                let tmp2 = stack.pop();
                let operator = operation.pop()

                console.log('operator', operator)

                switch (operator) {
                    case "+":
                        stack.push(Number(tmp1) + Number(tmp2));
                        break;

                    case "-":
                        stack.push(Number(tmp2) - Number(tmp1));
                        break;

                    case "*":
                        stack.push(Number(tmp1) * Number(tmp2));
                        break;

                    case "/":
                        stack.push(Number(tmp2) / Number(tmp1));
                        break;
                }
            }
        }
            
                     
            console.log('stack',  stack);
            
            return stack;
          
        }
        

        function setInputValue(button) {

            const number = button.innerText;
            const result = document.getElementById('result');
            result.value = String(result.value) + String(number);
            console.log('setinput:', result.value)

            
        }

        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                setInputValue(event.target)
            })
        })

        resultButton.addEventListener('click', (event) => {
            const result = document.getElementById('result');
            result.value = sum(result.value);
            console.log('res button', result.value)
        })

        btnSqr.addEventListener('click', () => {
            let result = document.getElementById('result')
            result.value = Math.sqrt(result.value)
            console.log(result.value)
            
        })

        clearButton.addEventListener('click', () => {
            let result = document.getElementById('result')
            result.value = '';
        })