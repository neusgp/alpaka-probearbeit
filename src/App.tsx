import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BlogEntryCard,
  Button,
  FooterCard,
  NavLink,
  ProductCard,
} from "./components";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  mockBlogEntries,
  mockBlogFilterButtons,
  mockNavLinks,
  mockProducts,
} from "./lib";

function App() {
  return (
    <div id="app" className="text-neutral-black">
      {/* NAVIGATION */}
      <div
        id="navigation"
        className="h-22 flex justify-between items-center md:px-26 px-4 py-7">
        <img src={"/logo.png"} className="w-[138px]" />
        <ul className="absolute md:right-26 right-4 md:flex h-22 hidden">
          {mockNavLinks.map(({ id, label }) => {
            return <NavLink label={label} key={id} />;
          })}
        </ul>
        <div className="p-[14px] flex md:hidden justify-center items-center">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5 " />
        </div>
      </div>
      {/* HEADER */}
      <div id="header" className="h-[888px] relative md:p-6">
        <div className="w-full h-full bg-[url(/header-img.png)] bg-center bg-cover">
          <div className="center flex flex-col items-center gap-6">
            <div className="text-center">
              <h1 className="text-white">The start of a great adventure.</h1>
              <h3 className="text-white hidden md:block">
                Porta dui sed mattis odio cras integer sapien proin diam.
                Malesuada purus bibendum nulla libero ut etiam ut. Amet odio
                felis gravida porta accumsan arcu. Libero neque mi vestibulum
                habitant neque sagittis venenatis.
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
      {/* PRODUCTS */}
      <div id="products" className="py-10 md:px-26 px-4 flex flex-col gap-4">
        <h2>Our Products</h2>
        <ul className="flex md:flex-row flex-col gap-4 mb-4">
          {mockProducts.map((product) => {
            const { id } = product;
            return <ProductCard product={product} key={id} />;
          })}
        </ul>
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
      <div
        id="blog"
        className="py-10 md:px-26 px-4 flex flex-col justify-center">
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
          <ul className="flex gap-4 overflow-y-auto">
            {mockBlogEntries.map((blogEntry) => {
              const { id } = blogEntry;
              return <BlogEntryCard key={id} blogEntry={blogEntry} />;
            })}
          </ul>
          <div className="position-scroll-button">
            <Button intent="black" icon="only" ariaLabel="scroll" />
          </div>
        </div>
      </div>
      {/* HIGHLIGHT */}
      <div
        id="highlight"
        className="py-10 md:px-26 px-4 flex flex-col justify-center">
        <div className="w-full flex md:flex-row flex-col-reverse">
          <div className="bg-blue-gray-dark flex flex-1 flex-col justify-between md:rounded-br-none md:rounded-tl-md rounded-b-md rounded-tl-none py-10 px-8 gap-6">
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
            <Button
              label="Read more"
              intent="white"
              icon="none"
              size="sm"
              ariaLabel="Read more"
            />
          </div>
          <div className="bg-[url(/highlight.png)] flex-2 bg-center bg-cover md:rounded-tl-none md:rounded-br-md rounded-t-md rounded-bl-none aspect-15/9"></div>
        </div>
      </div>
      {/* FOOTER */}
      <div id="footer">
        <div className="pb-5 md:py-10 flex flex-col justify-center items-center">
          <button className="text-5 bg-gray-70 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
        </div>
        <div className="bg-gray-70 py-20 px-26 md:flex hidden">
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
        <div className="px-26 py-6 flex flex-col md:flex-row md:justify-between">
          <p className="text-xs text-center">© 2023 Loremipsum GmbH</p>
          <div className="flex gap-4 justify-center">
            <p className="text-xs">Impressum</p>
            <p className="text-xs">Datenschutz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
