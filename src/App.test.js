/* eslint-disable testing-library/await-async-query */
import Enzyme, {shallow, ShallowWrapper} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

/**
 * Function to create default shallow wrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = ()=>shallow(<App />)
const findByTestAttribute = (wrapper, val)=>wrapper.find(`[data-test='${val}']`)

test('renders without error', ()=>{
    const wrapper = setup()
    // eslint-disable-next-line testing-library/await-async-query
    const appComponent = findByTestAttribute(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
})

test('renders increment button', ()=>{

  const wrapper = setup()
  const incrementButton = findByTestAttribute(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)
  
})

test('renders counter display',()=>{

  const wrapper = setup()
  const counterDisplay = findByTestAttribute(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
  
})

test('counter display starts at 0',()=>{

  const wrapper = setup()
  const count = findByTestAttribute(wrapper, "count").text()
  expect(count).toBe("0")

})

test('clicking button increments counter display',()=>{

  const wrapper = setup()
  const incrementButton = findByTestAttribute(wrapper, 'increment-button')
  
  incrementButton.simulate("click")

  const count = findByTestAttribute(wrapper, "count").text()
  expect(count).toBe("1")


})


