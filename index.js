  function applyChanges() {
            let input = document.getElementById("inputText");
            let Bold = document.getElementById("bold");
            let Italic = document.getElementById("italic");
            let Upper = document.getElementById("uppercase");
            let Lower = document.getElementById("lowercase");
            let toCapital = document.getElementById("capitalize");


            if (Upper.checked) {
                input.style.textTransform = "uppercase";
            }
              else{
                input.style.textTransform = "none";
            }
            if (Lower.checked) {
                input.style.textTransform = "lowercase";
            }

            if (Bold.checked) {
                input.style.fontWeight = "bold";
            }
             else{
                input.style.fontWeight = "100";
            }
            if (Italic.checked) {
                input.style.fontStyle = "italic";
            }
            else{
                input.style.fontStyle = "normal";
            }
            if (toCapital.checked) {
                input.style.textTransform = "capitalize";
            }
           
            let outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<span>" + input.value + "</span>";
        }

        function clearItems() {
            inputText.innerHTML = '';
            document.getElementById("inputText").value = '';
            let outputDiv = document.getElementById("output");
            outputDiv.innerText = '';

        }

        function colorchange() {
            let input = document.getElementById("inputText");
            let colorInput = document.getElementById("textColor");
            input.style.color = colorInput.value;
        }
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

  