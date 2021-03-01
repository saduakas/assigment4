const name_s = document.getElementById('name_s');
const bid = document.getElementById('startbid');
const loveletter = document.getElementById('loveletter');
const edu = document.getElementById('education');
const net = document.getElementById('networth');
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age1");
const reputation = document.getElementsByClassName("reputation");
const buttonElement = document.getElementById('submit');

const getCheckboxValuesForLoop = (html_collection, price) => { // Check this one, it should work for values with coefficients and with integers
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}


const getRadioValue = (node_list, price) => {  
  node_list.forEach(item => {
      if (item.checked) {
          price = price * Number(item.value)
      }
  })
return price;
}

 const calculate = () => {
   let price = Number(bid.value);
   let name = name_s.value;
   let love_letter = loveletter.value;
   if (price > 0 && name != "") {
    price = price * edu.value;
    price = price * net.value;
    price = getCheckboxValuesForLoop(skills, price)
    price = getRadioValue(age, price)
    price = getCheckboxValuesForLoop(reputation, price)
    let person = {
      name_s: name,
      price_s: price,
      loveletter_s: love_letter
    }

    document.getElementById("result").innerHTML = `The price for your Kelin/KeuBala ${person.name_s} is ${person.price_s}. Your love letter is "${person.loveletter_s}"`;
    }
    else {
      alert("Please specify name and start bid!")
    }
}
            

buttonElement.addEventListener('click', calculate);
