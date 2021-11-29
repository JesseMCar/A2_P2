const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]



function cleanUpIndex() {
    var div = document.querySelector("div");
    var first = div.firstElementChild;
    while (first) {
        first.remove();
        first = div.firstElementChild;
    }
}

function checkcontact(string) {
    contactplace = contactList.findIndex(x => x.name === string);
    if (contactplace != -1) {
        cleanUpIndex()
        renderView(contactList[contactplace])
        
    }

}

function createSingleIndex(contactList) {
    let index = ` <a><div class="contact"><p>${contactList.name}</p></div></a>`
	return index
}

function renderindex(contactLists) {
    let main = document.querySelector('.main')
    for (x in contactList) {
        main.insertAdjacentHTML('beforeend', createSingleIndex(contactList[x]))
    document.querySelectorAll('.contact').forEach(item => {
            item.addEventListener('click', evt => {
                evt.preventDefault() 
                checkcontact(evt.target.innerHTML)
                })            
    })
    }
}

function cleanUpView() {
    var div = document.querySelector("div");
    var first = div.firstElementChild;
    while (first) {
        first.remove();
        first = div.firstElementChild;
    }
}

function createSingleView(contactList){
	let main = `<div class="main">
	<div class="contactinfo">
		<div class="contactname">
			${contactList.name}
			<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
		</div>
		<div class="contactemail">${contactList.email}</div>
		<div class="contactphone">${contactList.phone}</div>
		<div class="contactaddress">${contactList.address}</div>
		<div class="buttons">
			<button class="button edit" value="Edit">Edit</button>
			<button class="button close" value="Close">Close</button>
		</div>
	</div>
</div>`
return main
}

function renderView(Lists) {
	let viewmain = document.querySelector('.main')
        viewmain.insertAdjacentHTML('beforeend', createSingleView(Lists))

    var CloseButton = document.querySelector('.close')
    CloseButton.addEventListener("click", (evt) => {
        evt.preventDefault()
        cleanUpIndex()
        renderindex(contactList)
})
}

function cleanUpCreate(){
    var div = document.querySelector("div");
    var first = div.firstElementChild;
    while (first) {
        first.remove();
        first = div.firstElementChild;
    }
}

function createcreate() {
	let main = `<div class="main">
    <div class="contactedit">
        <div class="contactimg">
            <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
        </div>
        <div class="form">
            <form>
                <div class="inputcontainer">
                    <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                    <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                </div>

                <div class="inputcontainer">
                    <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                    <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                </div>

                <div class="inputcontainer">
                    <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                    <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                </div>
                
                <div class="inputcontainer">
                    <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                    <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                </div>

                <div class="buttons">
                    <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                    <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>`
return main
}

function renderCreate(contactList) {
	let create = document.querySelector('.main')
        create.insertAdjacentHTML('beforeend', createcreate())

    var CancelButton = document.querySelector('.cancel')
    CancelButton.addEventListener("click", (evt) => {
        evt.preventDefault()
        cleanUpIndex()
        renderindex(contactList)
    })
}

 
const contacthome = document.querySelector('.nav-home')

contacthome.addEventListener("click", (evt) => {
    evt.preventDefault()
    cleanUpIndex()
    renderindex(contactList)

  })


const CreateNav = document.querySelector('.nav')

CreateNav.addEventListener("click", (evt) => {
    evt.preventDefault()
    cleanUpIndex()
    renderCreate(contactList)
})

renderindex(contactList)
