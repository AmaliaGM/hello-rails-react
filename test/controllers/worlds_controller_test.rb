require "test_helper"

class WorldsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @world = worlds(:one)
  end

  test "should get index" do
    get worlds_url, as: :json
    assert_response :success
  end

  test "should create world" do
    assert_difference("World.count") do
      post worlds_url, params: { world: { body: @world.body, title: @world.title } }, as: :json
    end

    assert_response :created
  end

  test "should show world" do
    get world_url(@world), as: :json
    assert_response :success
  end

  test "should update world" do
    patch world_url(@world), params: { world: { body: @world.body, title: @world.title } }, as: :json
    assert_response :success
  end

  test "should destroy world" do
    assert_difference("World.count", -1) do
      delete world_url(@world), as: :json
    end

    assert_response :no_content
  end
end
