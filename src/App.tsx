import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogEntryCard, Button, FooterCard } from "./components";
import {
  mockBlogEntries,
  mockBlogFilterButtons,
  mockNavLinks,
  mockProducts,
} from "./components/lib";
import { ProductCard } from "./components/ProductCard";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  //TODO: hover functionality nav links
  //TODO: try to use more semantic HTML
  return (
    <div id="app" className="text-neutral-black">
      {/* NAVIGATION */}
      <div
        id="navigation"
        className="h-22 flex justify-between items-center px-26 py-7">
        <img src={"/logo.png"} className="w-[138px]" />
        <div className="absolute right-26 flex h-22">
          {mockNavLinks.map(({ id, label }) => {
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
        <img src={"/header-img.png"} />
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
      {/* PRODUCTS */}
      <div id="products" className="py-10 px-26 flex flex-col">
        <h2>Our Products</h2>
        <div className="flex gap-4 mb-4">
          {mockProducts.map((product) => {
            const { id } = product;
            return <ProductCard product={product} key={id} />;
          })}
        </div>
        <div className="self-end">
          <Button
            intent="text"
            icon="none"
            label="Show all"
            ariaLabel="Show all"
          />
        </div>
      </div>
      {/* BLOG */}
      <div id="blog" className="py-10 px-26 flex flex-col justify-center">
        <div className="flex flex-col gap-4 text-center">
          <h2>Blog</h2>
          <p>
            Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa.
            <br />
            Odio pellentesque fusce elit facilisi risus blandit dictum turpis
            erat. A vestibulum sed scelerisque quis in.
          </p>
        </div>
        <div className="py-10 flex flex-col gap-4 relative">
          <div className="flex gap-2">
            {mockBlogFilterButtons.map(({ id, label }) => {
              return (
                <Button
                  key={id}
                  label={label}
                  intent="gray"
                  size="sm"
                  ariaLabel={label}
                  icon="none"
                />
              );
            })}
          </div>
          <div className="flex gap-4 overflow-y-auto">
            {mockBlogEntries.map((blogEntry) => {
              const { id } = blogEntry;
              return <BlogEntryCard key={id} blogEntry={blogEntry} />;
            })}
          </div>
          <div className="position-scroll-button">
            <Button intent="black" icon="only" ariaLabel="scroll" />
          </div>
        </div>
      </div>
      {/* HIGHLIGHT */}
      <div
        id="highlight"
        className="py-10 px-26 flex flex-col justify-center rounded-md">
        <div className="w-full h-117 flex">
          <div className="bg-blue-gray-dark h-full flex flex-1 flex-col justify-between rounded-l-md py-10 px-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-white">
                Enim nulla facilisis viverra lobortis
              </h2>
              <p className="text-white">
                Lectus orci lectus in leo vel a. Venenatis sagittis nunc
                fermentum urna morbi. Sed luctus mi vulputate posuere quis. Amet
                dolor rhoncus tincidunt porta faucibus lorem in integer et.
              </p>
            </div>

            <div className="">
              <Button
                label="Read more"
                intent="white"
                icon="none"
                size="sm"
                ariaLabel="Read more"
              />
            </div>
          </div>
          <div className="bg-[url(/1.png)] flex-2 bg-center rounded-r-md"></div>
        </div>
      </div>
      {/* FOOTER */}
      <div id="footer">
        <div className="h-30 flex flex-col justify-center items-center">
          <button className="text-5 bg-gray-70 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div>
        <div className="bg-gray-70 py-20 px-26 flex">
          <FooterCard title="Loremipsum GmbH">
            <div className="flex flex-col gap-4">
              <p className="font-light">
                Musterstraße 16
                <br />
                1245 Musterstadt
                <br />
                Telefon: 0123 / 456789-10
                <br />
                Telefax: 0123 / 456789-11
              </p>
              <Button
                intent="black"
                label="Zur Kontaktseite"
                ariaLabel="Zur Kontaktseite"
                size="sm"
                icon="none"
              />
            </div>
          </FooterCard>
          <FooterCard title="Corporate">
            <ul className="font-light flex flex-col gap-2">
              <li>About</li>
              <li>Who we are</li>
              <li>Team</li>
              <li>Jobs</li>
              <li>Development</li>
            </ul>
          </FooterCard>
          <FooterCard title="Products">
            <ul className="font-light flex flex-col gap-2">
              {mockProducts.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
              <li>Show All</li>
            </ul>
          </FooterCard>
          <FooterCard title="Service">
            <div className="flex flex-col h-full justify-between">
              <ul className="font-light flex flex-col gap-2">
                <li>Downloads</li>
                <li>FAQ</li>
              </ul>
              <span className="flex items-center gap-1 font-light">
                <FontAwesomeIcon icon={faYoutube} />
                <p>Youtube</p>
              </span>
            </div>
          </FooterCard>
        </div>
        <div className="h-16 px-26 py-6 flex justify-between">
          <p className="text-xs">© 2023 Loremipsum GmbH</p>
          <div className="flex gap-4">
            <p className="text-xs">Impressum</p>
            <p className="text-xs">Datenschutz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
