import Greeting from './Greeting';
import Image from './image.js';

function App() {
  return (
    <main>
      <Greeting name="Lucas" lastName="Moura" />
      <Image source="https://assets.website-files.com/5d4c18a28620ae5d4f33af94/5d4c18a28620ae685733aff3_BRAND-LIGHT.png" alternativeText="Trybe Logo"/>

    </main>
  );
}

export default App;