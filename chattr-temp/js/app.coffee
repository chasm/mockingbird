$ ->
  $('#advanced-search').hide()

  $('#search-field').on 'focus', (e) ->
    $('#advanced-search').fadeIn()

  $('#search-field').on 'blur', (e) ->
    $('#advanced-search').fadeOut()

  templates =
    rooms: Handlebars.compile($("#rooms-template").html())
    links: Handlebars.compile($("#links-template").html())
    uploads: Handlebars.compile($("#uploads-template").html())
    challenges: Handlebars.compile($("#challenges-template").html())
    users: Handlebars.compile($("#users-template").html())

  users =
    students: [
      { name: "Al Pacino", avatar: "al_pacino.jpg", icon: "cog" }
      { name: "Alfred Hitchcock", avatar: "alfred_hitchcock.jpg", icon: "cog" }
      { name: "Clint Eastwood", avatar: "clint_eastwood.jpg", icon: "cog" }
      { name: "James Brown", avatar: "james_brown.jpg", icon: "cog" }
      { name: "John Cleese", avatar: "john_cleese.jpg", icon: "cog" }
      { name: "Joseph Stalin", avatar: "joseph_stalin.jpg", icon: "cog" }
      { name: "Mohandas K. Gandhi", avatar: "mohandas_k_gandhi.jpg", icon: "cog" }
      { name: "Muhammad Ali", avatar: "muhammad_ali.jpg", icon: "cog" }
    ]

    instructors: [
      { name: "Albert Einstein", avatar: "albert_einstein.jpg", icon: "wrench" }
      { name: "Boris Karloff", avatar: "boris_karloff.jpg", icon: "wrench" }
      { name: "Diana Spencer", avatar: "diana_spencer.jpg", icon: "wrench" }
    ]

    staff: [
      { name: "Ernesto Guevara", avatar: "ernesto_guevara.jpg", icon: "earphone" }
      { name: "Michelle Obama", avatar: "michelle_obama.jpg", icon: "earphone" }
      { name: "Oprah Winfrey", avatar: "oprah_winfrey.jpg", icon: "earphone" }
      { name: "Quentin Tarantino", avatar: "quentin_tarantino.jpg", icon: "earphone" }
    ]

  data =
    users: users

  main = $('#main')

  $('#header-navlinks li').on 'click', (e) ->
    e.preventDefault()
    $(@).parent().children().removeClass('active')
    $(@).addClass('active')
    main.html templates[$(@).data('linkto')]( data[$(@).data('linkto')] )

  main.html templates["rooms"]( link: "rooms" )
