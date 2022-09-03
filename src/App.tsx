import logo from './logo.svg';
import './App.css';
import Workshop from "./components/Workshop";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="App">
      <div className={"header"}>
        <img src={logo} width={80} height={80} alt={"react logo"}/>
        <p>Welcome to the React Workshop!</p>
      </div>
      <div className={"instructions"}>
        <h2>Overview</h2>
        <p>In this short exercise, you'll be adding input boxes and a button that allows you to insert rows into the table below! Although this may seem like a standard feature, implementing it will require many core ideas of React. We hope that by the end of this exercise, you will have a better understanding of how to use props, states, and components in React!</p>

        <Instructions title={"Step 0: Familiarize yourself with the code"}>
          <p>Before you start, it might be helpful to go over the basic file structure of this code. The main body of this layout lies in <span className={"file"}>src/App.tsx</span>, which serves as the starting point for React. Inside the <span className={"file"}>src</span> folder is also the <span className={"file"}>components</span> folder, which is where smaller custom components are placed. This project has two custom components: <span className={"file"}>Instructions.tsx</span>, which is responsible for each of these expandable steps, and <span className={"file"}>Workshop.tsx</span>, where you will be doing all your work. There are also see CSS files with the same names, which contain the corresponding styling for each of these components.</p>
          <p>Outside of the <span className={"file"}>src</span> folder, you can also see <span className={"file"}>package.json</span>, <span className={"file"}>package-lock.json</span>, and <span className={"file"}>node_modules</span>. <span className={"file"}>package.json</span> and <span className={"file"}>package-lock.json</span> are responsible for listing all the libraries that were installed by Node.js' package manager, while <span className={"file"}>node_modules</span> contains the actual libraries themselves. You should <i>rarely</i> ever need to touch these as Node.js handles it all for you, but they are good to know about just in case.</p>
        </Instructions>

        <Instructions title={"Step 1: Adding input boxes (5-10 minutes)"}>
          <p>You might notice that right now there is only one input field present; your first task will be to add input boxes for the other four columns of the table (Calories, Fat, Carbs, and Protein)! To do so, open up <span className={"file"}>Workshop.tsx</span> and look near the beginning of the JSX snippet for the <span className={"component"}>&lt;TextField&gt;</span> component. Notice the <b>4</b> props that it has: required (self-explanatory), the label for the input, as well as two props that connect the input box to a state variable. Remember that every interactive part of React is handled by state, so these last two props are essential to make our input box function!</p>
          <p>Now, go ahead and add:</p>
          <ol>
            <li>Four more state variables for each new input field. Note that because the input fields take in string inputs, these states should be strings as well!</li>
            <li>Four more <span className={"component"}>&lt;TextField&gt;</span> components based off the one already present.</li>
          </ol>
        </Instructions>

        <Instructions title={"Step 2: Adding a submit button (5 minutes)"}>
          <p>Now that we have our text fields, we need a button to actually submit what we enter! MaterialUI provides us a nice button with the <span className={"component"}>&lt;Button&gt;</span> component (we've already imported it for you so you can use it right away!).</p>
          <p>Since our button will have some text, we will need both an opening and a closing tag. Insert these after all the <span className={"component"}>&lt;TextField&gt;</span>s, and between the two tags type in whatever text you want on the button. We also need to give it a function to be called when the button is clicked, so assign the currently empty <span className={"variable"}>onSubmit</span> function to the <span className={"variable"}>onClick</span> prop.</p>
          <p>Also, we've written some styling for this button for you! To apply it, just set the <span className={"variable"}>id</span> prop of the button to "submit-entry".</p>
        </Instructions>

        <Instructions title={"Step 3: Making our submit button work (10 minutes)"}>
          <p>Finally, the last step! It's time to take the values in our text fields and add them to table. Luckily for us, we can easily access all the values in our text fields through our state variables, and we can also change the table by just changing the <span className={"variable"}>rows</span> state variable! Since we're using Typescript, we'll have to convert our string inputs to the numbers that our table expects using the <span className={"variable"}>parseInt</span> function (this function is given). Try and figure out the code to do this—don't forget to put it in the <span className={"variable"}>onSubmit</span> function so it runs when the button is clicked! </p>
          <p style={{color: "grey", fontSize: "0.8rem"}}>Hint: The <a href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"}>concat</a> function might be helpful here!</p>
        </Instructions>

        <Instructions title={"Additional Steps"}>
          <p>You want even more things to do? Well alright then... here are a couple of additional features you can try and add!</p>
          <ul>
            <li>Clear out all the input fields after you click the submit button.</li>
            <li>Add input validation to make sure that we get values that actually make sense.</li>
            <li>Add a toggle that shows and hides the input row.</li>
            <li>Anything else that you can think of!</li>
          </ul>
        </Instructions>
      </div>
      <Workshop/>
    </div>
  );
}

export default App;
