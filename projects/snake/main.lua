push = require 'packages/push'
Class = require 'packages/class'

require 'classes/Snake'

WINDOW_WIDTH = 1920
WINDOW_HEIGHT = 1080

VIRTUAL_WIDTH = 192
VIRTUAL_HEIGHT = 108

function love.load()
    love.graphics.setDefaultFilter('nearest', 'nearest')
    love.window.setTitle('Snake')

    push:setupScreen(VIRTUAL_WIDTH, VIRTUAL_HEIGHT, WINDOW_WIDTH, WINDOW_HEIGHT, {
        fullscreen = false,
        resizable = false,
        vsync = true
    })

    fonts = {
        small = love.graphics.newFont('assets/font.ttf', 8),
        medium = love.graphics.newFont('assets/font.ttf', 16),
        large = love.graphics.newFont('assets/font.ttf', 32),
    }
    love.graphics.setFont(fonts.small)

    snake = Snake(VIRTUAL_WIDTH / 2 - 1, VIRTUAL_HEIGHT / 2 - 1, 2, 2)

    gameState = 'start'
end

function love.update(dt)
    snake:update(dt)
end

function love.keypressed(key)
    if key == 'escape' then
        love.event.quit()
    elseif key == 'enter' or key == 'return' then
        if gameState == 'start' then
            gameState = 'playing'
        elseif gameState == 'playing' then
            gameState = 'start'
        end
    end
end

function love.draw()
    push:apply('start')

    love.graphics.setColor(1, 1, 1, 0.5)
    if gameState == 'start' then
        love.graphics.printf(gameState, 0, 4, VIRTUAL_WIDTH, 'center')
    elseif gameState == 'playing' then
        love.graphics.printf(gameState, 0, 4, VIRTUAL_WIDTH, 'center')
    end

    love.graphics.setColor(1, 1, 1, 1)

    love.graphics.setLineWidth(2)
    love.graphics.rectangle('line', 1, 1, VIRTUAL_WIDTH - 2, VIRTUAL_HEIGHT - 2)

    snake:render()

    push:apply('end')
end
