import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-transparent border-b border-white/20 shadow-none">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl font-bold text-white">
          Nike
          <div className="w-10 rounded-full overflow-hidden border-2 border-white">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAD7+/v29vbX19ft7e3x8fHk5OTp6elPT098fHzg4OBra2u6urqTk5MVFRXHx8dFRUVzc3MbGxs6OjqxsbGenp6np6dAQEAxMTGFhYVcXFxkZGTNzc3BwcEqKioLCwsiIiIGGILUAAAEP0lEQVR4nO3a67ayKhQG4IXiWUlN8Wx5/ze5bVXrKzMTRG2P8T7/BaYCMoGfHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZurZ3CyaIto2t0goVrJYKPlE1qzRkMVr6qaGLPeMn39jL2pjkgSnaMpd83YfxeEFIJN4srSSOuUJ7JGmm3X8SQorYkniYExKob5Mc06PM6SM5OqUt8biWHkgi8Q7U070mdfvORcjJz+S6Sts/zgXnixXYTcoq8ispA8le70WEdDsPf42mLE6ukZCIh7KvVr900Fime6pitCx2jrdIiJNS+Z9EfSkhU9g2MZTXTkH+1OGS18ovRRShssaJ0AM3Lw7/IiE+XTR0w9+yYkNV++bzeH4mT6Sm4gfW9Qtvu8bUdD3wn+Mgh+Pinq5dp8IuVdHGeTWadsPyQSSkcBS0gF07rCO6wpZkWk0aH4eRkDxuFRQe3l6Rv8WQsZvgd5kyVDEl/zirvpXnqihtik5THhcjkRA/89TUwP6mESXlvWMFzHXOY5Ec3EDVkjC8997zepOZRnlcjX6Sfi3JGmXd24jupS6fFceZQewkr+P9Xqmlbm2r8b9yuzWCsbhzehdI38ECpat0j6wXjN4O/4nPJHLhacm/slWOGd2kLHkfRl/ZKVYzfz1IHytQNJvpthfEh3dRXLuXU6pPafWnKlT8Z2za3vPEtzqfr5E3lU+VVAs/vE6DbPyf+Khw01V2gKzneaZbsjVjh1n56ZP0IiadC3/gDmoqJevRaObWk+P9xskW5MLT6LD+k0ymaQRuHU2P95uqtdbb+y1fqnNFFxaUV/lpTiCXXHjNzVI6shIXSY60wO9mfRGp1ySIjVU6Lz/SNMq6uXH0P0i+9tGCNb7W+Lha0g0vnV6mPDs56fqnJMGb9R+b+DdrBg1ZNP7cODW58Cf6aC/7rf9NqmTSMItHs6u3nHKb/d6x4X9X8+GGYp+5c3fiiTFnn2+0Q/LTTjak8EsehNSzLNq0GS9jZ/a8dQ9FXS780fte9ueUO1VVOVEhGscFoxvujloz1lHSzlxhLjwDFRvJIorU2PjEulkrlGj7kwQt/dwsCad6q/nr0YzxL+wQrZALzwrmdcW8UFezvc4QzWFettBaufAOweSs3fPI3VTYzaJs2RHkYuomgCrw9r4HpWVqQvGbb7g4FKoIxd39o1zRxZEcV8+FZ7NFMt9XXbLfZY5XiwZNUn/NtbSr5uOm8DtOuc+tlAmyC5p6s1xYRDNnc3goTr/iquALjQnnZ+Wii1Or0uvPzX/QsVU3i5cyBDraafNcWJTezQxllwRSWP1x3JyPKu5NbSPIp3bFurzi3zl9jdN5NX5adMgr90sn4glmWg4OJA9JFZdZ+M2T1wQrTDlz3diP47LkWRp6/9NA7jTTsC3bMPe/QA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDV/gPgpzObq6ppmQAAAABJRU5ErkJggg=="
              alt="User"
            />
          </div>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto border-white/40 text-white placeholder-white"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full overflow-hidden border-2 border-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s"
                alt="User"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
