import "./CatalogPage.scss";

export function CatalogPage() {
  function handleButtonCLick() {
    alert("CatalogPage clicked");
  }

  return (
    <section className="catalog-page">
      <p>CatalogPage works!</p>
      <button onClick={handleButtonCLick}>CatalogPage Press me</button>
    </section>
  );
}
