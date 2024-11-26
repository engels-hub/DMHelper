function Mobs() {
  // load mobs from chache here
  return (
    <div>
      <blockquote>Put statblocks here</blockquote>
      <ul className="tree-view">
        <li>
          <details open>
            <summary>Char1</summary>
            <ul>
              <li>HP:40</li>
              <li>
                <details>
                  <summary>Spells</summary>
                  <ul>
                    <li>Magic Missiles</li>
                    <li>Ray of Frost</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default Mobs;
