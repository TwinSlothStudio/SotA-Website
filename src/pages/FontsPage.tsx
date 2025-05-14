import Title from '../components/Title';
import './FontsPage.css'

const FontsPage = () => {
  return (
    <div className="font-showcase">
      <Title text="Fonts"/>
      <div className="page-content">
        <h1 className="title-text">Font Planning</h1>
        <p>"You're not supposed to be here..."</p>
      </div>

      <div></div>

      {/* Celtic Garamond the 2nd Font */}
      <div className="font-group celtic-garamond">
        <div className="font-title">Celtic Garamond the 2nd</div>
        <div className="font-heading">Heading 1 - Celtic Garamond</div>
        <div className="font-normal">Normal Text - Celtic Garamond</div>
        <div className="font-sample">
          <p>This is a sample paragraph in the Celtic Garamond the 2nd font. This font gives an elegant and traditional look.</p>
        </div>
      </div>



      {/* Elementary Gothic Bookhand Font */}
      <div className="font-group elementary-gothic">
        <div className="font-title">Elementary Gothic Bookhand</div>
        <div className="font-heading">Heading 1 - Elementary Gothic</div>
        <div className="font-normal">Normal Text - Elementary Gothic</div>
        <div className="font-sample">
          <p>This is a sample paragraph in the Elementary Gothic Bookhand font. This font has a more whimsical and handwritten feel.</p>
        </div>
      </div>

      {/* Longa Iberica Font */}
      <div className="font-group longa-iberica">
        <div className="font-title">Longa Iberica</div>
        <div className="font-heading">Heading 1 - Longa Iberica</div>
        <div className="font-normal">Normal Text - Longa Iberica</div>
        <div className="font-sample">
          <p>This is a sample paragraph in the Longa Iberica font. It offers a unique and historical aesthetic, with an Iberian influence.</p>
        </div>
      </div>

      {/* MorrisRoman-Black Font */}
      <div className="font-group morris-roman">
        <div className="font-title">MorrisRoman-Black</div>
        <div className="font-heading">Heading 1 - MorrisRoman</div>
        <div className="font-normal">Normal Text - MorrisRoman</div>
        <div className="font-sample">
          <p>This is a sample paragraph in the MorrisRoman-Black font. A strong, bold font for impactful headings or titles.</p>
        </div>
      </div>

      {/* OldNewspaperTypes Font */}
      <div className="font-group old-newspaper-types">
        <div className="font-title">OldNewspaperTypes</div>
        <div className="font-heading">Heading 1 - OldNewspaper</div>
        <div className="font-normal">Normal Text - OldNewspaper</div>
        <div className="font-sample">
          <p>This is a sample paragraph in the OldNewspaperTypes font. It has a vintage, newspaper-like quality, perfect for historical or retro styles.</p>
        </div>
      </div>
    </div>
  );
}

export default FontsPage;
