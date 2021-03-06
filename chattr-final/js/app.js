// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var currentUser, goToRoom, instructors, linksTemplate, main, messageTemplate, newRoomTemplate, oneLiners, postMessage, questionsTemplate, resultsTemplate, roomTemplate, rooms, roomsTemplate, select2Init, setActive, staff, students, tags, unsetActive, uploadsTemplate, users, usersTemplate;
    $('#advanced-fields').hide();
    Handlebars.registerHelper('latestMessage', function(messages, options) {
      if (messages && messages.length > 0) {
        return messages[messages.length - 1].message;
      } else {
        return new Handlebars.SafeString("<span class=\"no-messages\">No messages yet.</span>");
      }
    });
    select2Init = function() {
      return $('#list-of-users').select2();
    };
    unsetActive = function() {
      return $('#header-navlinks').children().removeClass('active');
    };
    setActive = function(lnk) {
      lnk = $(lnk);
      unsetActive();
      return lnk.parent().addClass('active');
    };
    oneLiners = ["I never forget a face, but in your case I'd be glad to make an exception.", "My Dad used to say 'always fight fire with fire', which is probably why he got thrown out of the fire brigade.", "Start every day off with a smile and get it over with.", "This radio lark's a wonderful hobby, y'know. I've got friends all over the world, all over the world... none in this country, but friends all over the world.", "My wife sent her photograph to the Lonely Hearts Club. They sent it back saying they weren't that lonely.", "Life is full of misery, loneliness, and suffering - and it's all over much too soon.", "My definition of an intellectual is someone who can listen to the William Tell Overture without thinking of the Lone Ranger.", "I'm on a whiskey diet. I've lost three days already."];
    roomsTemplate = Handlebars.compile($("#rooms-template").html());
    newRoomTemplate = Handlebars.compile($("#new-room-template").html());
    messageTemplate = Handlebars.compile($("#message-template").html());
    roomTemplate = Handlebars.compile($("#room-template").html());
    linksTemplate = Handlebars.compile($("#links-template").html());
    questionsTemplate = Handlebars.compile($("#questions-template").html());
    uploadsTemplate = Handlebars.compile($("#uploads-template").html());
    usersTemplate = Handlebars.compile($("#users-template").html());
    resultsTemplate = Handlebars.compile($("#results-template").html());
    main = $('#main');
    students = [
      {
        name: "Al Pacino",
        avatar: "al_pacino.jpg",
        icon: "cog"
      }, {
        name: "Alfred Hitchcock",
        avatar: "alfred_hitchcock.jpg",
        icon: "cog"
      }, {
        name: "Clint Eastwood",
        avatar: "clint_eastwood.jpg",
        icon: "cog"
      }, {
        name: "James Brown",
        avatar: "james_brown.jpg",
        icon: "cog"
      }, {
        name: "John Cleese",
        avatar: "john_cleese.jpg",
        icon: "cog"
      }, {
        name: "Joseph Stalin",
        avatar: "joseph_stalin.jpg",
        icon: "cog"
      }, {
        name: "Mohandas K. Gandhi",
        avatar: "mohandas_k_gandhi.jpg",
        icon: "cog"
      }, {
        name: "Muhammad Ali",
        avatar: "muhammad_ali.jpg",
        icon: "cog"
      }
    ];
    instructors = [
      {
        name: "Albert Einstein",
        avatar: "albert_einstein.jpg",
        icon: "wrench"
      }, {
        name: "Boris Karloff",
        avatar: "boris_karloff.jpg",
        icon: "wrench"
      }, {
        name: "Diana Spencer",
        avatar: "diana_spencer.jpg",
        icon: "wrench"
      }
    ];
    staff = [
      {
        name: "Ernesto Guevara",
        avatar: "ernesto_guevara.jpg",
        icon: "earphone"
      }, {
        name: "Michelle Obama",
        avatar: "michelle_obama.jpg",
        icon: "earphone"
      }, {
        name: "Oprah Winfrey",
        avatar: "oprah_winfrey.jpg",
        icon: "earphone"
      }, {
        name: "Quentin Tarantino",
        avatar: "quentin_tarantino.jpg",
        icon: "earphone"
      }
    ];
    users = students.concat(instructors).concat(staff);
    currentUser = students[4];
    tags = ["synergy", "lisp", "lasso", "perl", "cobol", "smalltalk", "sql", "fortran", "asp", "scheme", "lua", "delphi", "java", "shell", "tcl", "ruby", "erlang", "javascript", "assembly", "brainfuck", "c#", "ocaml", "c++", "forth", "ada", "scala", "clojure", "php", "rexx", "pascal", "python", "haskell"];
    rooms = [
      {
        title: "Lorem ipsum dolor",
        users: students.slice(3).concat(instructors.slice(0, 2)).concat(staff.slice(0, 1)),
        description: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
        tags: tags.slice(7, 13).join(" "),
        archivable: true,
        challenges: [
          {
            question: "What is your name?",
            answers: ["Lancelot", "Sir Robin", "Guinevere", "Arthur", "All of the above"]
          }, {
            question: "What is your quest?",
            answers: ["To explore strange new worlds", "To seek out new life and new civilizations", "To boldy go where no one has gone before", "The Holy Grail", "All of the above"]
          }, {
            question: "What is your favorite color?",
            answers: ["Alabaster", "Puce", "Burnt Sienna", "Chartreuse", "All of the above"]
          }
        ],
        links: [
          {
            label: "The Holy Grail",
            url: "http://www.imdb.com/title/tt0071853/?ref_=fn_al_tt_2",
            tags: "silly funny"
          }, {
            label: "The Life of Brian",
            url: "http://www.imdb.com/title/tt0079470/?ref_=fn_al_tt_1",
            tags: "blasphemous funnier"
          }, {
            label: "The Meaning of Life",
            url: "http://www.imdb.com/title/tt0085959/?ref_=fn_al_tt_5",
            tags: "shocking hilarious controversial"
          }
        ],
        messages: [
          {
            user: users[3],
            message: "Three.  Three.  And we'd better not risk another frontal assault, that rabbit's dynamite.",
            type: "comment"
          }, {
            user: users[5],
            message: "Would it help to confuse it if we run away more?",
            type: "question"
          }, {
            user: users[3],
            message: "Oh, shut up and go and change your armor.",
            type: "comment"
          }, {
            user: users[7],
            message: "Let us taunt it!  It may become so cross that it will make a mistake.",
            type: "comment"
          }, {
            user: users[3],
            message: "Like what?",
            type: "question"
          }, {
            user: users[6],
            message: "We have the Holy Hand Grenade.",
            type: "answer"
          }
        ]
      }, {
        title: "Mauris blandit aliquet",
        users: students.slice(4, 7).concat(staff.slice(1, 2)),
        description: "Curabitur arcu erat, accumsan id imperdiet et.",
        tags: tags.slice(2, 6).join(" "),
        archivable: true
      }, {
        title: "Consectetur adipiscing",
        users: students.slice(1, 5).concat(instructors.slice(2, 3)),
        description: "Quisque velit nisi, pretium ut lacinia in.",
        tags: tags.slice(17, 23).join(" "),
        archivable: true
      }, {
        title: "Eget tincidunt nibh",
        users: instructors,
        description: "Donec rutrum congue leo eget malesuada.  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
        tags: tags.slice(27).join(" "),
        archivable: false
      }, {
        title: "Nulla quis lorem",
        users: students.concat(instructors).concat(staff.slice(2, 4)),
        description: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit.",
        tags: tags.slice(6, 9).concat(tags.slice(25, 28)).join(" "),
        archivable: true
      }, {
        title: "Libero malesuada",
        users: students.slice(3, 7),
        description: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.",
        tags: tags.slice(7, 13).join(" "),
        archivable: false
      }
    ];
    main.html(roomsTemplate({
      rooms: rooms
    }));
    goToRoom = (function(_this) {
      return function(idx) {
        var room;
        room = rooms[parseInt(idx)];
        room["rooms"] = rooms;
        main.html(roomTemplate(room));
        setTimeout(function() {
          return $('.start-shut').collapse('hide');
        }, 500);
        return $('#message-input').focus();
      };
    })(this);
    $('header').on('click', '#rooms-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(roomsTemplate({
        rooms: rooms
      }));
    });
    $('header').on('click', '#links-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(linksTemplate());
    });
    $('header').on('click', '#questions-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(questionsTemplate());
    });
    $('header').on('click', '#uploads-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(uploadsTemplate());
    });
    $('header').on('click', '#users-link', function(e) {
      e.preventDefault();
      setActive(this);
      return main.html(usersTemplate({
        students: students,
        instructors: instructors,
        staff: staff
      }));
    });
    $('header').on('focus', '#search-field', function(e) {
      return $('#advanced-fields').fadeIn();
    });
    $('header').on('blur', '#search-field', function(e) {
      return $('#advanced-fields').fadeOut();
    });
    $('header').on('submit', '#search-form', function(e) {
      e.preventDefault();
      unsetActive();
      return main.html(resultsTemplate());
    });
    $('#main').on('click', '.room-title a, .rooms li a', function(e) {
      var idx;
      e.preventDefault();
      unsetActive();
      idx = $(this).data('room');
      return goToRoom(idx);
    });
    $('#main').on('click', 'ul.challenges li', function(e) {
      e.preventDefault();
      return $(this).find('.answers').toggle('blind');
    });
    postMessage = function() {
      var message;
      message = {
        message: $('#message-input').val(),
        user: currentUser,
        type: 'comment'
      };
      $('#message-input').val('');
      $('#messages-box').append(messageTemplate(message));
      return setTimeout(function() {
        message = {
          message: oneLiners.pop(),
          user: staff[3],
          type: 'comment'
        };
        return $('#messages-box').append(messageTemplate(message));
      }, 1000);
    };
    $('#main').on('click', '#send-message', function(e) {
      return postMessage();
    });
    $('#main').on('submit', '#say-something', function(e) {
      e.preventDefault();
      return postMessage();
    });
    $('#main').on('click', '#new-room-button', function(e) {
      e.preventDefault();
      unsetActive();
      return main.html(newRoomTemplate({
        users: users
      }));
    });
    $('#main').on('submit', '#new-room-form', function(e) {
      var indices, members, newRoom;
      e.preventDefault();
      indices = $(this).find('#list-of-users').val();
      members = indices ? indices.map(function(idx) {
        return users[parseInt(idx)];
      }) : [];
      newRoom = {
        title: $(this).find('#room-title').val(),
        description: $(this).find('#room-description').val(),
        tags: $(this).find('#room-tags').val(),
        archivable: $(this).find('input[name=archivable]:checked').val() === "true",
        users: members
      };
      rooms = rooms.concat([newRoom]);
      return goToRoom(rooms.length - 1);
    });
    $('#main').on('click', '#select-all-users', function(e) {
      if ($('#select-all-users').is(':checked')) {
        $('#list-of-users > option').prop('selected', 'selected');
        return $('#list-of-users').trigger('change');
      } else {
        $('#list-of-users > option').removeAttr('selected');
        return $('#list-of-users').trigger('change');
      }
    });
    return $('#main').on('click', '#new-room-button', function(e) {
      e.preventDefault();
      unsetActive();
      main.html(newRoomTemplate({
        users: users
      }));
      return select2Init();
    });
  });

}).call(this);

//# sourceMappingURL=app.map
