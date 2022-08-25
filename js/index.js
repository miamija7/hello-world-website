"use strict";

$(function (){
    // alert( 'The DOM has finished loading!' );


    // Planet Data
    let planets = [
        {
            name: 'The Sun',
            table: {
                type: 'Yellow Dwarf',
                age: '~4.5 billion years',
                distance: '93 million miles'
            },
            info: ' is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.',
            img: 'img/sun.png'
        },
        {
            name: 'Mercury',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '92.8 million miles'
            },
            info: ' is hot, but not too hot for ice. The closest planet to the Sun does indeed have ice on its surface. That sounds surprising at first glance, but the ice is found in permanently shadowed craters — those that never receive any sunlight. It is thought that perhaps comets delivered this ice to Mercury in the first place. In fact, NASA’s MESSENGER spacecraft not only found ice at the North Pole, but it also found organics, which are the building blocks for life. Mercury is way too hot and airless for life as we know it, but it shows how these elements are distributed across the Solar System.',
            img: 'img/mercury.png'
        },
        {
            name: 'Venus',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '151.8 million miles'
            },
            info: ' does not have any moons. Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones around the Solar System. Saturn has over 60, for example. And some moons are little more than captured asteroids, which may have been what happened with Mars’ two moons, for example. So what makes these planets different? No one is really sure why Venus does not, but there is at least one stream of research that suggests it could have had one in the past.',
            img: 'img/venus.png'
        },
        {
            name: 'Earth',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '0 miles'
            },
            info: '\'s  magnetic field can be seen at work during light shows. We have a magnetic field surrounding our planet that protects us from the blasts of radiation and particles the Sun sends our way. Good thing, too, because such flare-ups could prove deadly to unprotected people; that’s why NASA keeps an eye on solar activity for astronauts on the International Space Station, for example. At any rate, when you see auroras shining in the sky, that’s what happens when the particles from the Sun flow along the magnetic field lines and interact with Earth’s upper atmosphere.',
            img: 'img/earth.png'
        },
        {
            name: 'Mars',
            table: {
                type: 'Planet',
                age: '~4.6 billion years',
                distance: '94.5 million miles'
            },
            info: ' had a thicker atmosphere in the past. What a bunch of contrasts in the inner Solar System: practically atmosphere-less Mercury, a runaway hothouse greenhouse effect happening in Venus’ thick atmosphere, temperate conditions on much of Earth and then a thin atmosphere on Mars. But look at the planet and you can see gullies carved in the past from probable water. Water requires more atmosphere, so Mars had more in the past. Where did it go? Some scientists believe it’s because the Sun’s energy pushed the lighter molecules out of Mars’s atmosphere over millions of years, decreasing the thickness over time.',
            img: 'img/mars.png'
        },
        {
            name: 'Jupiter',
            table: {
                type: 'Planet',
                age: '~4.6 billion years',
                distance: '383.1 million miles'
            },
            info: ' is a great comet catcher. The most massive planet in the Solar System probably had a huge influence on its history. At 318 times the mass of Earth, you can imagine that any passing asteroid or comet going near Jupiter has a big chance of being caught or diverted. Maybe Jupiter was partly to blame for the great bombardment of small bodies that peppered our young Solar System early in its history, causing scars you can still see on the Moon today. And in 1994, astronomers worldwide were treated to a rare sight: a comet, Shoemaker-Levy 9, breaking up under Jupiter’s gravity and slamming into the atmosphere.',
            img: 'img/jupiter.png'
        },
        {
            name: 'Saturn',
            table: {
                type: 'Planet',
                age: '~4.6 billion years',
                distance: '822.8 million miles'
            },
            info: ' has rings and no one knows how old they are. There’s a field of ice and rock debris circling Saturn that from afar, appear as rings. Early telescope observations of the planet in the 1600s caused some confusion: does that planet have ears, or moons, or what? With better resolution, however, it soon became clear that there was a chain of small bodies encircling the gas giant. It’s possible that a single moon tore apart under Saturn’s strong gravity and produced the rings. Or, maybe they’ve been around (pun intended) for the last few billion years, unable to coalesce into a larger body but resistant enough to gravity not to break up.',
            img: 'img/saturn.png'
        },
        {
            name: 'Uranus',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '1.8 billion miles'
            },
            info: ' is more stormy than we thought. When Voyager 2 flew by the planet in the 1980s, scientists saw a mostly featureless blue ball and some assumed there wasn’t much activity going on on Uranus. We’ve had a better look at the data since then that does show some interesting movement in the southern hemisphere. Additionally, the planet drew closer to the Sun in 2007, and in more recent years telescope probing has shown some storms going on. What is causing all this activity is difficult to say unless we were to send another probe that way. And unfortunately, there are no missions yet that are slated for sure to zoom out to that part of the Solar System.',
            img: 'img/uranus.png'
        },
        {
            name: 'Neptune',
            table: {
                type: 'Planet',
                age: '~4.5 billion years',
                distance: '2.7 billion miles'
            },
            info: ' has supersonic winds. While on Earth we are concerned about hurricanes, the strength of these storms is nowhere near what you would find on Neptune. At its highest altitudes, according to NASA, winds blow at more than 1,100 miles per hour (1,770 kilometers per hour). To put that in context, that’s faster than the speed of sound on Earth, at sea level. Why Neptune is so blustery is a mystery, especially considering the Sun’s heat is so little at its distance.',
            img: 'img/neptune.png'
        }
    ]


    // Initial Display
    if (window.matchMedia('(min-width: 768px)').matches)
    {
        $('footer').toggleClass('hidden');
    } else {
        $('.container').toggleClass('hidden');
        $('footer').toggleClass('hidden');
    }


    // Click Events
    planets.forEach((planet, index)=> {
        if (window.matchMedia('(min-width: 768px)').matches){
            $(`.nav${index}`).bind('click', function (){
                dataSwap(index);
                toggleActive(index);
            })
        } else {
            $(`.nav${index}`).bind('click', function (){
                dataSwap(index);
                $('.top-nav').toggleClass('hidden');
                $('.container').toggleClass('hidden');
                $('footer').toggleClass('hidden');
            })
            $('.more').bind('click', function (){
                $('.top-nav').toggleClass('hidden');
                $('.container').toggleClass('hidden');
                $('footer').toggleClass('hidden');
            })
        }
    })

    // Function Definitions
    function dataSwap(i) {
        $('.name').html(`${planets[i].name}`);
        $('.type').html(`${planets[i].table.type}`);
        $('.age').html(`${planets[i].table.age}`);
        $('.distance').html(`${planets[i].table.distance}`);
        $('.info').html(`${planets[i].info}`);
        let em = $("<em></em>").text(`${planets[i].name}`);
        $('.info').prepend(em);
        $('.planet-img').attr('src', `${planets[i].img}`);
        $('cite').html(`- ${planets[i].name}`);
    }

    function toggleActive(i) {
        $('.active').toggleClass('active')
        $(`.nav${i}`).toggleClass('active')
    }

})