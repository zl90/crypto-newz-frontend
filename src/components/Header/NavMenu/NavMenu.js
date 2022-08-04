import { useEffect } from "react";

let articleContainer;

const NavMenu = () => {
  useEffect(() => {
    articleContainer = document.querySelector(".article-container");
  }, []);

  // testing 'Article Detail' on/off toggle
  const handleClick = () => {
    if (articleContainer) {
      if (articleContainer.style.display !== "block") {
        articleContainer.style.display = "block";
      } else {
        articleContainer.style.display = "none";
      }
    }
  };

  return (
    <nav className="header-nav-menu-container">
      <ul>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>API</button>
        </li>
      </ul>
      <button className="test-button" onClick={handleClick}>
        Test Article
      </button>
    </nav>
  );
};

export default NavMenu;
