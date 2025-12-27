
        
        let substanceName = document.getElementById('substanceName');
        let amount = document.getElementById('amount');
        let addBtn = document.getElementById('addBtn');
        let displayArea = document.getElementById('display')
        let totalDiv = document.getElementById('total')


        let expenses = [];

        addBtn.addEventListener('click',function(){
            let name = substanceName.value;
            let substanceAmount = Number(amount.value);
            if(name === ""|| isNaN(substanceAmount) || substanceAmount <= 0){
                alert("please enter valid data");
                return;
            }

          expenses.push({ substance: name, amount: substanceAmount });
            displayArea.innerHTML = "";
          amount.value = "";
          substanceName.value = "";
            expenses.forEach(function(expense){
               let li = document.createElement('li');
               li.innerText = expense.substance + ":" + expense.amount;
               displayArea.appendChild(li);
            })
            let total = 0;

        expenses.forEach(function(expense){
            total += expense.amount
        })
        totalDiv.innerText = "Total: " + total;
         substanceName.value = "";
            amount.value = "";
        })

   
        document.addEventListener('mousemove', function(e) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.pageX - 4 + 'px';
            trail.style.top = e.pageY - 4 + 'px';
            document.body.appendChild(trail);
            
          
            setTimeout(() => {
                trail.remove();
            }, 600);
        });


        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });


        function animateExpenseItem(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.4s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 10);
        }
    