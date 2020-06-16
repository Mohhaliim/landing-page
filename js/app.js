
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

    
    
    
    
const main = document.querySelector('main');
const createDocFrag = document.createDocumentFragment();
const newSection = () =>
{
    const createNewSection = document.createElement('section');
    const createNewDiv = document.createElement('div');
    const createNewHeader = document.createElement('h2');
    const createPara1 = document.createElement('p');
    const createPara2 = document.createElement('p');
    createNewSection.setAttribute('id','section4');
    createNewSection.setAttribute('data-nav','section 4');
    createNewDiv.setAttribute('class','landing__container');
    createNewHeader.textContent= 'Section 4';
    createPara1.textContent ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    createPara2.textContent='Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    
    createNewDiv.appendChild(createNewHeader);
    createNewDiv.appendChild(createPara1);
    createNewDiv.appendChild(createPara2);
    createNewSection.appendChild(createNewDiv);
    createDocFrag.appendChild(createNewSection);
    
    }
newSection();
main.appendChild(createDocFrag); 
    





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const myUl = document.getElementById('navbar__list');
const createNavFrag = document.createDocumentFragment();
const navItems = () => 
{
const sections = document.querySelectorAll('section');
for(let i=0;i<sections.length;i++)
    {
        let y =i+1;
        const createLi = document.createElement('li');
        const createAnchor = document.createElement('a');
        
        createLi;
        createLi.textContent = sections[i].getAttribute('data-nav');
        createLi.className ='menu__link';
        createAnchor;
        createAnchor.setAttribute('href','#section'+y);
        createLi.appendChild(createAnchor);
        createNavFrag.appendChild(createLi);
    }
}
navItems();

myUl.setAttribute('class','navbar__menu');
myUl.appendChild(createNavFrag);





//scroll event 
const list = document.querySelector('ul');
list.addEventListener('click',function (e)
        {
            e.preventDefault();
            const sections = document.querySelectorAll('section');
            
            for(let i=0;i<sections.length;i++)
                {
            
                    if(e.target.textContent === sections[i].getAttribute('data-nav'))
                
                         {
                             sections[i].scrollIntoView({behavior:'smooth'});
                             sections[i].classList.add('active');
                    
                         }
                    else if(e.target.textContent !== sections[i].getAttribute('data-nav'))
                        {
                            sections[i].classList.remove('active');
                        }
            
                }
        });




const viewPort = () =>
{
    const sections = document.querySelectorAll('section');
    for(let i=0;i<sections.length;i++)
                {
                
                    
                    
                    
                    
                    window.addEventListener('scroll', () => {
                        const bounding = sections[i].getBoundingClientRect();
     
                    if(         bounding.top >= 0 &&
                                bounding.left >= 0 &&
                                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth))
                        {
                            
                            const active = document.querySelector('.active');
                            active.classList.toggle('active');
                            sections[i].classList.add('active');
                        }
                    
                        
                        });
            
                }
    
    
    
}
viewPort();





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active







