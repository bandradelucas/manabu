Snake = Class {}

function Snake:init(x, y, width, height)
    self.x = x
    self.y = y
    self.dx = 1
    self.dy = 0
    self.width = width
    self.height = height
    self.speed = 50
end

function Snake:collides(paddle)
    -- if self.x > paddle.x + paddle.width or paddle.x > self.x + self.width then
    --     return false
    -- end

    -- if self.y > paddle.y + paddle.height or paddle.y > self.y + self.height then
    --     return false
    -- end

    -- return true
end

function Snake:reset()
    -- self.x = VIRTUAL_WIDTH / 2 - 2
    -- self.y = VIRTUAL_HEIGHT / 2 - 2
end

function Snake:update(dt)
    if self.dx ~= 0 then
        self.x = self.x + (self.dx * self.speed * dt)
    elseif self.dy ~= 0 then
        self.y = self.y + (self.dy * self.speed * dt)
    end

    if love.keyboard.isDown('w') and self.dy == 0 then
        self.dx = 0
        self.dy = -1
    elseif love.keyboard.isDown('a') and self.dx == 0 then
        self.dx = -1
        self.dy = 0
    elseif love.keyboard.isDown('s') and self.dy == 0 then
        self.dx = 0
        self.dy = 1
    elseif love.keyboard.isDown('d') and self.dx == 0 then
        self.dx = 1
        self.dy = 0
    end
end

function Snake:render()
    love.graphics.rectangle('fill', self.x, self.y, self.width, self.height)
end
