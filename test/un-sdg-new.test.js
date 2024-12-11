import { html, fixture, expect } from '@open-wc/testing';
import "../un-sdg-new.js";

describe("unSdgNew test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <un-sdg-new
        title="title"
      ></un-sdg-new>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
