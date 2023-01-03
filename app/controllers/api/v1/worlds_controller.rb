class Api::V1::WorldsController < ApplicationController
  before_action :set_world, only: %i[ show update destroy ]

  # GET /worlds
  def index
    @worlds = World.all

    render json: @worlds
  end

  # GET /worlds/1
  def show
    render json: @world
  end

  # POST /worlds
  def create
    @world = World.new(world_params)

    if @world.save
      render json: @world, status: :created, location: @world
    else
      render json: @world.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /worlds/1
  def update
    if @world.update(world_params)
      render json: @world
    else
      render json: @world.errors, status: :unprocessable_entity
    end
  end

  # DELETE /worlds/1
  def destroy
    @world.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_world
      @world = World.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def world_params
      params.require(:world).permit(:title, :body)
    end
end
