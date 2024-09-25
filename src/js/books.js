const booksCSVData = `Name,Published Year,Genre,Author,ImageUrl
The Lord of the Rings: The Fellowship of the Ring,1954,Fantasy,J.R.R. Tolkien
1984,1949,History,George Orwell
Treasure Island,1883,Adventure,Robert Louis Stevenson
Harry Potter and the Sorcerer's Stone,1997,Fantasy,J.K. Rowling
Harry Potter and the Chamber of Secrets,1998,Fantasy,J.K. Rowling
Harry Potter and the Prisoner of Azkaban,1999,Fantasy,J.K. Rowling
A Tale of Two Cities,1859,History,Charles Dickens
Great Expectations,1861,History,Charles Dickens
The Lord of the Rings: The Return of the King,1955,Fantasy,J.R.R. Tolkien
Catch-22,1961,Comedy,Joseph Heller
The Hobbit,1937,Fantasy,J.R.R. Tolkien
The Lord of the Rings,1954,Fantasy,J.R.R. Tolkien
The Silmarillion,1977,Fantasy,J.R.R. Tolkien
The Three Musketeers,1844,Adventure,Alexandre Dumas
The Count of Monte Cristo,1844,Adventure,Alexandre Dumas
Twenty Years After,1845,Adventure,Alexandre Dumas
Harry Potter and the Sorcerer's Stone,1997,Fantasy,J.K. Rowling
Harry Potter and the Chamber of Secrets,1998,Fantasy,J.K. Rowling
Harry Potter and the Prisoner of Azkaban,1999,Fantasy,J.K. Rowling
Pride and Prejudice,1813,Comedy,Jane Austen
Emma,1815,Comedy,Jane Austen
Sense and Sensibility,1811,Comedy,Jane Austen
Gulliver's Travels,1726,Adventure,Jonathan Swift
A Tale of Two Cities,1859,History,Charles Dickens
Great Expectations,1861,History,Charles Dickens
The War of the Worlds,1898,Adventure,H.G. Wells
The Time Machine,1895,Adventure,H.G. Wells
The Invisible Man,1897,Adventure,H.G. Wells
Robinson Crusoe,1719,Adventure,Daniel Defoe
Moll Flanders,1722,Adventure,Daniel Defoe
Don Quixote,1605,Comedy,Miguel de Cervantes
Moby Dick,1851,Adventure,Herman Melville
The Catcher in the Rye,1951,History,J.D. Salinger
The Old Man and the Sea,1952,Adventure,Ernest Hemingway
For Whom the Bell Tolls,1940,History,Ernest Hemingway
The Odyssey,1725,Adventure,Homer
The Iliad,1711,History,Homer
Journey to the Center of the Earth,1864,Adventure,Jules Verne
Around the World in Eighty Days,1872,Adventure,Jules Verne
Twenty Thousand Leagues Under the Sea,1870,Adventure,Jules Verne
Frankenstein,1818,Adventure,Mary Shelley
Dracula,1897,Adventure,Bram Stoker
The Adventures of Sherlock Holmes,1892,Adventure,Arthur Conan Doyle
The Hound of the Baskervilles,1902,Adventure,Arthur Conan Doyle
The Secret History,1992,History,Donna Tartt
The Little Friend,2002,History,Donna Tartt
Good Omens,1990,Comedy,Neil Gaiman & Terry Pratchett
Stardust,1999,Fantasy,Neil Gaiman
American Gods,2001,Fantasy,Neil Gaiman
The Book Thief,2005,History,Markus Zusak
The Adventures of Huckleberry Finn,1884,Adventure,Mark Twain
The Adventures of Tom Sawyer,1876,Adventure,Mark Twain
Alice's Adventures in Wonderland,1865,Fantasy,Lewis Carroll
Through the Looking-Glass,1871,Fantasy,Lewis Carroll
A Game of Thrones,1996,Fantasy,George R.R. Martin
A Clash of Kings,1998,Fantasy,George R.R. Martin
A Storm of Swords,2000,Fantasy,George R.R. Martin
The Hunger Games,2008,Adventure,Suzanne Collins
Catching Fire,2009,Adventure,Suzanne Collins
Mockingjay,2010,Adventure,Suzanne Collins
The Once and Future King,1958,Fantasy,T.H. White
The Jungle Book,1894,Adventure,Rudyard Kipling
The Second Jungle Book,1895,Adventure,Rudyard Kipling
The Shadow of the Wind,2001,History,Carlos Ruiz Zafón
The Wind in the Willows,1908,Fantasy,Kenneth Grahame
Les Misérables,1862,History,Victor Hugo
The Hunchback of Notre-Dame,1831,History,Victor Hugo
The Princess Bride,1973,Comedy,William Goldman
The Call of the Wild,1903,Adventure,Jack London
White Fang,1906,Adventure,Jack London
The Chronicles of Narnia: Prince Caspian,1951,Fantasy,C.S. Lewis
The Chronicles of Narnia: The Voyage of the Dawn Treader,1952,Fantasy,C.S. Lewis
Slaughterhouse-Five,1969,History,Kurt Vonnegut
Cat's Cradle,1963,Comedy,Kurt Vonnegut
Brave New World,1932,History,Aldous Huxley
Animal Farm,1945,History,George Orwell
1984,1949,History,George Orwell
The Alchemist,1988,Adventure,Paulo Coelho
The Road,2006,Adventure,Cormac McCarthy
Blood Meridian,1985,Adventure,Cormac McCarthy
The Secret Garden,1911,Adventure,Frances Hodgson Burnett
The Wonderful Wizard of Oz,1900,Fantasy,L. Frank Baum
The Lost World,1912,Adventure,Arthur Conan Doyle
The Diary of a Young Girl,1947,History,Anne Frank
The Divine Comedy,1320,Comedy,Dante Alighieri
Journey to the End of the Night,1932,Adventure,Louis-Ferdinand Céline
The Golden Compass,1995,Fantasy,Philip Pullman
The Subtle Knife,1997,Fantasy,Philip Pullman
The Amber Spyglass,2000,Fantasy,Philip Pullman
The Name of the Wind,2007,Fantasy,Patrick Rothfuss
The Wise Man's Fear,2011,Fantasy,Patrick Rothfuss
The Last Wish,1993,Fantasy,Andrzej Sapkowski
The Name of the Rose,1980,History,Umberto Eco
The Once and Future King,1958,Fantasy,T.H. White
Watership Down,1972,Fantasy,Richard Adams
The Princess Bride,1973,Fantasy,William Goldman
The Neverending Story,1979,Fantasy,Michael Ende
Jonathan Strange & Mr Norrell,2004,Fantasy,Susanna Clarke
The Giver,1993,Fantasy,Lois Lowry
The Scarlet Pimpernel,1905,Adventure,Baroness Orczy
The Pillars of the Earth,1989,History,Ken Follett
The Kite Runner,2003,History,Khaled Hosseini
The Pillars of the Earth,1989,History,Ken Follett
All the Light We Cannot See,2014,History,Anthony Doerr
The Night Circus,2011,Fantasy,Erin Morgenstern
The Lies of Locke Lamora,2006,Fantasy,Scott Lynch
The Road to Wigan Pier,1937,History,George Orwell
Brave New World,1932,History,Aldous Huxley
Cloud Atlas,2004,History,David Mitchell
The Time Traveler's Wife,2003,Fantasy,Audrey Niffenegger
The Girl with the Dragon Tattoo,2005,History,Stieg Larsson
The Da Vinci Code,2003,History,Dan Brown
A Farewell to Arms,1929,History,Ernest Hemingway
The Hunger Games,2008,Adventure,Suzanne Collins
Catch-22,1961,Comedy,Joseph Heller
One Hundred Years of Solitude,1967,History,Gabriel García Márquez
The Trial,1925,History,Franz Kafka
The Handmaid's Tale,1985,Fantasy,Margaret Atwood
The Girl Who Kicked the Hornet's Nest,2007,History,Stieg Larsson
The Girl Who Played with Fire,2006,History,Stieg Larsson
The Shadow of the Wind,2001,History,Carlos Ruiz Zafón
The Hunger Games,2008,Adventure,Suzanne Collins
Mockingjay,2010,Adventure,Suzanne Collins
The Maze Runner,2009,Adventure,James Dashner
Percy Jackson & the Olympians: The Lightning Thief,2005,Fantasy,Rick Riordan
The Perks of Being a Wallflower,1999,History,Stephen Chbosky
The Help,2009,History,Kathryn Stockett
Memoirs of a Geisha,1997,History,Arthur Golden
A Man Called Ove,2012,Comedy,Fredrik Backman
Big Little Lies,2014,Comedy,Liane Moriarty
The Rosie Project,2013,Comedy,Graeme Simsion
Ready Player One,2011,Adventure,Ernest Cline
Artemis,2017,Adventure,Andy Weir
The Martian,2011,Adventure,Andy Weir
The Girl with the Louding Voice,2020,History,Abi Daré
The Immortal Life of Henrietta Lacks,2010,History,Rebecca Skloot
The Goldfinch,2013,History,Donna Tartt
Gone Girl,2012,History,Gillian Flynn
Life of Pi,2001,Adventure,Yann Martel
The Wind-Up Bird Chronicle,1995,Fantasy,Haruki Murakami
The Bone Clocks,2014,Fantasy,David Mitchell
Neverwhere,1996,Fantasy,Neil Gaiman
The Graveyard Book,2008,Fantasy,Neil Gaiman
The Ocean at the End of the Lane,2013,Fantasy,Neil Gaiman
The Luminaries,2013,History,Eleanor Catton
The Secret Life of Bees,2001,History,Sue Monk Kidd
Middlesex,2002,History,Jeffrey Eugenides
The Name of the Wind,2007,Fantasy,Patrick Rothfuss
The Wise Man's Fear,2011,Fantasy,Patrick Rothfuss
The Night Manager,1993,History,John le Carré
Tinker Tailor Soldier Spy,1974,History,John le Carré
The Spy Who Came in from the Cold,1963,History,John le Carré
A Prayer for Owen Meany,1989,History,John Irving
The World According to Garp,1978,Comedy,John Irving
The Road,2006,Adventure,Cormac McCarthy
Blood Meridian,1985,Adventure,Cormac McCarthy
The Power of One,1989,Adventure,Bryce Courtenay
The Picture of Dorian Gray,1890,Fantasy,Oscar Wilde
The Importance of Being Earnest,1895,Comedy,Oscar Wilde
A Portrait of the Artist as a Young Man,1916,History,James Joyce
Ulysses,1922,History,James Joyce
The Trial,1925,History,Franz Kafka
Metamorphosis,1915,History,Franz Kafka
The Master and Margarita,1967,History,Mikhail Bulgakov
The Brothers Karamazov,1880,History,Fyodor Dostoevsky
Crime and Punishment,1866,History,Fyodor Dostoevsky
The Idiot,1869,History,Fyodor Dostoevsky
The Stranger,1942,History,Albert Camus
The Plague,1947,History,Albert Camus
The Tale of Genji,1021,History,Murasaki Shikibu
The Complete Maus,1991,History,Art Spiegelman
The Road to Serfdom,1944,History,Friedrich Hayek
Sapiens: A Brief History of Humankind,2011,History,Yuval Noah Harari
Homo Deus: A Brief History of Tomorrow,2015,History,Yuval Noah Harari
The Left Hand of Darkness,1969,Fantasy,Ursula K. Le Guin
The Dispossessed,1974,Fantasy,Ursula K. Le Guin
The Lathe of Heaven,1971,Fantasy,Ursula K. Le Guin
The Fellowship of the Ring,1954,Fantasy,J.R.R. Tolkien
The Two Towers,1954,Fantasy,J.R.R. Tolkien
The Return of the King,1955,Fantasy,J.R.R. Tolkien
The Belgariad: Pawn of Prophecy,1982,Fantasy,David Eddings
The Belgariad: Queen of Sorcery,1982,Fantasy,David Eddings
The Belgariad: Magician's Gambit,1983,Fantasy,David Eddings
Dune,1965,Fantasy,Frank Herbert
The Mists of Avalon,1983,Fantasy,Marion Zimmer Bradley
The Sword of Shannara,1977,Fantasy,Terry Brooks
The Elfstones of Shannara,1982,Fantasy,Terry Brooks
The Wishsong of Shannara,1985,Fantasy,Terry Brooks
The Crystal Cave,1970,Fantasy,Mary Stewart
The Hollow Hills,1973,Fantasy,Mary Stewart
The Last Enchantment,1979,Fantasy,Mary Stewart
The Farseer Trilogy: Assassin's Apprentice,1995,Fantasy,Robin Hobb
The Farseer Trilogy: Royal Assassin,1996,Fantasy,Robin Hobb
The Farseer Trilogy: Assassin's Quest,1997,Fantasy,Robin Hobb
The Wheel of Time: The Eye of the World,1990,Fantasy,Robert Jordan
The Wheel of Time: The Great Hunt,1990,Fantasy,Robert Jordan
The Wheel of Time: The Dragon Reborn,1991,Fantasy,Robert Jordan
The Wheel of Time: The Shadow Rising,1992,Fantasy,Robert Jordan
Sherlock Holmes. Selected Stories,2014-04,Fiction,Arthur Conan Doyle
The Complete Sherlock Holmes,2014-05-28,Fiction,Arthur Conan Doyle
Sherlock Holmes. Selected Stories,2014-04,Fiction,Arthur Conan Doyle
The Complete Sherlock Holmes,2014-05-28,Fiction,Arthur Conan Doyle`;

let libraryRenderer;

const preLoading = () => {
  const divForLoading = document.createElement('div');
  divForLoading.classList.add('loader-big');
  divForLoading.innerText = "Loading...";
  const mainTag = document.getElementById('main');
  mainTag.appendChild(divForLoading);
  return mainTag;
}

const mainFunction = () => {
  preLoading();
  addHomePageActions();
  setTimeout(function main() {
    load(booksCSVData);
    render();
    const divForLoading = document.querySelector('.loader-big');
    divForLoading.remove();
  }, 5000);
  const displayPopup = () => {
    const divForPopup = document.querySelector('.add-book');
    divForPopup.style.display = 'block';
    return new Promise(function(resolve){
      setTimeout(function () {
        divForPopup.style.display = 'none';
        resolve();
      }, 2000);
    })
  };
  const button = document.querySelector('.add-book-button');
  button.addEventListener('click', displayPopup);
  const dropDown = document.querySelector('.group-by-container');
  dropDown.addEventListener('change', displayPopup);
  const form = document.querySelector('.popup-container');
  form.remove();
}

window.onload = mainFunction;
