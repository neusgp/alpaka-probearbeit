import { Button } from "./components";

function App() {
  const navLinks = [
    { id: "1", label: "Blog" },
    { id: "2", label: "Products" },
    { id: "3", label: "About" },
  ];
  //TODO: hover functionality nav links
  //TODO: try to use more semantic HTML
  return (
    <div id="app" className="text-neutral-black">
      {/* NAVIGATION */}
      <div
        id="navigation"
        className="h-22 flex justify-between items-center px-26 py-7">
        <img src={"logo.png"} className="w-[138px]" />
        <div className="absolute right-26 flex h-22">
          {navLinks.map(({ id, label }) => {
            return (
              // component nav
              <div className="h-full flex flex-col" key={id}>
                <button
                  type="button"
                  className="font-bold cursor-pointer h-full px-3">
                  {label}
                </button>
                <div className="relative h-1 bottom-0 rounded-t-lg bg-green-light"></div>
              </div>
            );
          })}
        </div>
      </div>
      {/* HEADER */}
      <div id="header" className="h-[888px] p-6 relative">
        <img src={"header-img.png"} />
        <div className="center flex flex-col items-center gap-6">
          <div className="text-center">
            <h1 className="text-white">The start of a great adventure</h1>
            <h3 className="text-white">
              Porta dui sed mattis odio cras integer sapien proin diam.
              Malesuada purus bibendum nulla libero ut etiam ut. Amet odio felis
              gravida porta accumsan arcu. Libero neque mi vestibulum habitant
              neque sagittis venenatis.
            </h3>
          </div>
          <Button
            label="Read more"
            intent="white"
            size="md"
            icon="none"
            ariaLabel="Read more"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
